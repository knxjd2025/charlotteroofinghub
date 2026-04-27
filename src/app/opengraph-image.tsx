import { ImageResponse } from 'next/og'

// Next.js Metadata File convention: this route auto-generates /opengraph-image
// at build time and is referenced by `<meta property="og:image">`. Replaces
// the previously-broken /og-image.jpg static reference.
//
// 1200x630 is the recommended OG size for Facebook, LinkedIn, etc.

export const alt = 'Charlotte Roofing Hub — Locally-Verified Roofing Companies'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2540 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '28px', opacity: 0.85 }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: 'white',
              color: '#1e3a5f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 700,
            }}
          >
            ⌂
          </div>
          <span style={{ fontWeight: 600 }}>Charlotte Roofing Hub</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '900px',
            }}
          >
            Charlotte&apos;s Locally-Verified Roofing Directory
          </div>
          <div style={{ fontSize: '32px', opacity: 0.85, maxWidth: '900px' }}>
            25+ background-checked roofing companies. Free service for Charlotte and
            surrounding-area homeowners.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '32px', fontSize: '24px', opacity: 0.85 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✓ Face-to-Face Verified
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✓ Background Checked
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✓ 4.8★ Required
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
