import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get('place_id');

  if (!placeId) {
    return NextResponse.json(
      { error: 'place_id is required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_API_KEY not set — add it to .env.local (see .env.example)');
    return NextResponse.json(
      { error: 'Place details service is not configured. Please contact support.' },
      { status: 503 }
    );
  }

  // Try new Places API first, fall back to legacy
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'formattedAddress,location,addressComponents',
      },
    });

    const data = await response.json();

    if (!data.error && data.location) {
      let city = '';
      let state = '';
      let postalCode = '';

      data.addressComponents?.forEach((component: {
        types: string[];
        longText: string;
        shortText: string;
      }) => {
        if (component.types.includes('locality')) {
          city = component.longText;
        }
        if (component.types.includes('administrative_area_level_1')) {
          state = component.shortText;
        }
        if (component.types.includes('postal_code')) {
          postalCode = component.longText;
        }
      });

      return NextResponse.json({
        formatted_address: data.formattedAddress,
        lat: data.location?.latitude,
        lng: data.location?.longitude,
        city,
        state,
        postalCode,
      });
    }

    console.error('Places Details (New) error:', data.error?.message);
  } catch (error) {
    console.error('Places Details (New) error:', error);
  }

  // Fallback: Legacy Place Details API
  try {
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=formatted_address,geometry,address_components&key=${apiKey}`;

    const response = await fetch(legacyUrl);
    const data = await response.json();

    if (data.status !== 'OK' || !data.result) {
      console.error('Places Details (Legacy) status:', data.status, data.error_message);
      return NextResponse.json(
        { error: 'Failed to get place details' },
        { status: 400 }
      );
    }

    const result = data.result;
    let city = '';
    let state = '';
    let postalCode = '';

    result.address_components?.forEach((component: {
      types: string[];
      long_name: string;
      short_name: string;
    }) => {
      if (component.types.includes('locality')) {
        city = component.long_name;
      }
      if (component.types.includes('administrative_area_level_1')) {
        state = component.short_name;
      }
      if (component.types.includes('postal_code')) {
        postalCode = component.long_name;
      }
    });

    return NextResponse.json({
      formatted_address: result.formatted_address,
      lat: result.geometry?.location?.lat,
      lng: result.geometry?.location?.lng,
      city,
      state,
      postalCode,
    });
  } catch (error) {
    console.error('Places Details (Legacy) error:', error);
    return NextResponse.json(
      { error: 'Failed to get place details' },
      { status: 500 }
    );
  }
}
