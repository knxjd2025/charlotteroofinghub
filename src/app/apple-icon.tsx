import { ImageResponse } from 'next/og'

// Next.js Metadata File convention: generates the iOS home-screen icon at
// /apple-icon and sets the matching <link rel="apple-touch-icon"> tag.
// Replaces the previously-broken /apple-touch-icon.png static reference.

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2540 100%)',
          color: 'white',
          fontSize: '110px',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
        }}
      >
        CR
      </div>
    ),
    { ...size }
  )
}
