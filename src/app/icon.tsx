import { ImageResponse } from 'next/og'

// Next.js Metadata File convention: 32x32 PNG icon at /icon, used as the
// favicon-equivalent and as the canonical logo URL referenced from the
// Organization JSON-LD schema.

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e3a5f',
          color: 'white',
          fontSize: '20px',
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        CR
      </div>
    ),
    { ...size }
  )
}
