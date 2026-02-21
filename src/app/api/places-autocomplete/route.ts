import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(`autocomplete:${clientIP}`, RATE_LIMITS.autocomplete);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const input = searchParams.get('input');

  if (!input || input.length < 3 || input.length > 200) {
    return NextResponse.json({ predictions: [] });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_API_KEY not set — add it to .env.local (see .env.example)');
    return NextResponse.json(
      { error: 'Address lookup service is not configured. Please contact support.' },
      { status: 503 }
    );
  }

  // Try the new Places API (v1) first, fall back to legacy if it fails
  try {
    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
      },
      body: JSON.stringify({
        input: input,
        includedRegionCodes: ['us'],
        locationBias: {
          circle: {
            center: { latitude: 35.2271, longitude: -80.8431 },
            radius: 80000,
          },
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('Places Autocomplete (New) error:', data.error.message, data.error.status);
      // Fall through to legacy API
    } else {
      const predictions = (data.suggestions || []).map((s: {
        placePrediction?: {
          placeId: string;
          text: { text: string };
          structuredFormat?: {
            mainText: { text: string };
            secondaryText: { text: string };
          };
        };
      }) => {
        const p = s.placePrediction;
        if (!p) return null;
        return {
          place_id: p.placeId,
          description: p.text?.text || '',
          main_text: p.structuredFormat?.mainText?.text || p.text?.text || '',
          secondary_text: p.structuredFormat?.secondaryText?.text || '',
        };
      }).filter(Boolean);

      if (predictions.length > 0) {
        return NextResponse.json({ predictions });
      }
    }
  } catch (error) {
    console.error('Places Autocomplete (New) error:', error);
  }

  // Fallback: Legacy Places Autocomplete API
  try {
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&types=address&components=country:us&location=35.2271,-80.8431&radius=80000&key=${apiKey}`;

    const response = await fetch(legacyUrl);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Places Autocomplete (Legacy) status:', data.status, data.error_message);
      return NextResponse.json(
        { error: `Google Places API error: ${data.status}. ${data.error_message || 'Check that Places API is enabled and the API key is valid.'}` },
        { status: 503 }
      );
    }

    const predictions = (data.predictions || []).map((p: {
      place_id: string;
      description: string;
      structured_formatting?: {
        main_text: string;
        secondary_text: string;
      };
    }) => ({
      place_id: p.place_id,
      description: p.description,
      main_text: p.structured_formatting?.main_text || p.description,
      secondary_text: p.structured_formatting?.secondary_text || '',
    }));

    return NextResponse.json({ predictions });
  } catch (error) {
    console.error('Places Autocomplete (Legacy) error:', error);
    return NextResponse.json({ error: 'Address lookup failed. Please try again.' }, { status: 500 });
  }
}
