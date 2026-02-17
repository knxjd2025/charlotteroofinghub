import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

function sanitizeString(str: string, maxLength: number = 100): string {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLength).replace(/[<>]/g, '');
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
}

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(`guide-download:${clientIP}`, RATE_LIMITS.submitLead);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const data = await request.json();

    const firstName = sanitizeString(data.firstName, 50);
    const lastName = sanitizeString(data.lastName, 50);
    const phone = sanitizeString(data.phone, 20);
    const email = sanitizeString(data.email, 254).toLowerCase();
    const address = sanitizeString(data.address, 200);
    const city = sanitizeString(data.city || '', 100);
    const state = sanitizeString(data.state || '', 50);
    const postalCode = sanitizeString(data.postalCode || '', 20);

    if (!firstName || !lastName || !phone || !email || !address) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    // Submit to GHL webhook if configured
    const webhookUrl = process.env.GHL_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address1: address,
            city,
            state,
            postalCode,
            source: 'CharlotteRoofingHub.com',
            tags: ['roofing-guide-download', 'website-lead', 'charlotte-roofing-hub', 'free-book'],
          }),
        });
      } catch (error) {
        console.error('GHL webhook error for guide download:', error);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your guide is ready to download!',
    });
  } catch (error) {
    console.error('Guide download submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
