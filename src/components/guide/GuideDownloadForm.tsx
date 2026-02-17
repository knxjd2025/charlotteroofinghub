'use client'

import { useState, FormEvent, useRef } from 'react'
import { User, Phone, Mail, MapPin, Loader2, Download, Gift, BookOpen, CheckCircle, X } from 'lucide-react'

interface GuideDownloadFormProps {
  onClose?: () => void
  variant?: 'modal' | 'inline'
}

export default function GuideDownloadForm({ onClose, variant = 'inline' }: GuideDownloadFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

  const isFormValid = firstName && lastName && phone && email && address

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isFormValid || isLoading) return

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/guide-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setIsSuccess(true)
    } catch {
      setError('Could not connect. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true)
    try {
      // Dynamically import html2pdf to keep bundle small
      const html2pdf = (await import('html2pdf.js')).default

      // Get all prose-simple sections (the book content)
      const bookSections = document.querySelectorAll('[data-chapter]')

      // Create a container for PDF content
      const pdfContainer = document.createElement('div')
      pdfContainer.style.cssText = 'width: 700px; padding: 40px; font-family: Georgia, serif; color: #1a1a1a; line-height: 1.8;'

      // Add title page
      pdfContainer.innerHTML = `
        <div style="text-align: center; padding: 80px 0 60px;">
          <h1 style="font-size: 36px; color: #1E3A5F; margin-bottom: 16px; font-weight: bold;">The Complete Charlotte</h1>
          <h1 style="font-size: 36px; color: #1E3A5F; margin-bottom: 24px; font-weight: bold;">Roofing Guide</h1>
          <p style="font-size: 18px; color: #666; margin-bottom: 12px;">Everything You Need to Know About Your Roof</p>
          <p style="font-size: 16px; color: #666; margin-bottom: 40px;">For Homeowners in Charlotte & Surrounding Areas</p>
          <div style="width: 60px; height: 3px; background: #e63946; margin: 0 auto 40px;"></div>
          <p style="font-size: 14px; color: #888;">CharlotteRoofingHub.com</p>
          <p style="font-size: 14px; color: #888;">A free resource from local Charlotte roofing professionals</p>
        </div>
      `

      // Extract text content from each chapter
      bookSections.forEach((section) => {
        const chapterEl = section.cloneNode(true) as HTMLElement
        // Remove any interactive elements
        chapterEl.querySelectorAll('a').forEach(a => {
          const span = document.createElement('span')
          span.textContent = a.textContent
          span.style.fontWeight = '600'
          span.style.color = '#1E3A5F'
          a.replaceWith(span)
        })
        // Style the content for PDF
        chapterEl.style.cssText = 'page-break-before: always; padding: 20px 0;'
        // Style headings
        chapterEl.querySelectorAll('h2').forEach(h => {
          h.style.cssText = 'font-size: 24px; color: #1E3A5F; margin-bottom: 16px; font-weight: bold; border-bottom: 2px solid #1E3A5F; padding-bottom: 8px;'
        })
        chapterEl.querySelectorAll('h3').forEach(h => {
          h.style.cssText = 'font-size: 18px; color: #1E3A5F; margin-top: 24px; margin-bottom: 10px; font-weight: bold;'
        })
        chapterEl.querySelectorAll('p').forEach(p => {
          p.style.cssText = 'margin-bottom: 12px; font-size: 14px; line-height: 1.8; color: #333;'
        })
        chapterEl.querySelectorAll('li').forEach(li => {
          li.style.cssText = 'margin-bottom: 6px; font-size: 14px; line-height: 1.7; color: #333;'
        })
        chapterEl.querySelectorAll('strong').forEach(s => {
          s.style.color = '#1a1a1a'
        })
        // Remove images from PDF (they don't render well)
        chapterEl.querySelectorAll('img').forEach(img => img.remove())
        // Remove SVG icons
        chapterEl.querySelectorAll('svg').forEach(svg => svg.remove())
        // Remove chapter badge spans
        chapterEl.querySelectorAll('.inline-block').forEach(el => {
          const htmlEl = el as HTMLElement
          if (htmlEl.textContent?.startsWith('Chapter')) {
            htmlEl.style.cssText = 'display: inline-block; background: #EEF2F7; color: #1E3A5F; padding: 4px 16px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 8px;'
          }
        })

        pdfContainer.appendChild(chapterEl)
      })

      // Add footer page
      const footer = document.createElement('div')
      footer.style.cssText = 'page-break-before: always; text-align: center; padding: 100px 0;'
      footer.innerHTML = `
        <h2 style="font-size: 24px; color: #1E3A5F; margin-bottom: 16px;">Thank You for Reading!</h2>
        <p style="font-size: 16px; color: #666; margin-bottom: 8px;">Visit us at CharlotteRoofingHub.com</p>
        <p style="font-size: 14px; color: #888;">for more resources, verified roofing companies, and free estimates.</p>
        <div style="margin-top: 40px; padding: 20px; background: #F0F4F8; border-radius: 8px; display: inline-block;">
          <p style="font-size: 14px; color: #1E3A5F; font-weight: bold; margin-bottom: 4px;">Prepared for: ${firstName} ${lastName}</p>
          <p style="font-size: 12px; color: #888;">Downloaded from CharlotteRoofingHub.com</p>
        </div>
      `
      pdfContainer.appendChild(footer)

      // Temporarily add to DOM
      pdfContainer.style.position = 'fixed'
      pdfContainer.style.left = '-9999px'
      pdfContainer.style.top = '0'
      document.body.appendChild(pdfContainer)

      const opt = {
        margin: [0.5, 0.6, 0.5, 0.6] as [number, number, number, number],
        filename: 'Charlotte-Roofing-Guide.pdf',
        image: { type: 'jpeg' as const, quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      }

      await html2pdf().set(opt).from(pdfContainer).save()

      // Clean up
      document.body.removeChild(pdfContainer)
    } catch (err) {
      console.error('PDF generation error:', err)
      setError('Could not generate PDF. You can use your browser\'s Print function (Ctrl+P) to save this page as a PDF.')
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  // Success state — show download button
  if (isSuccess) {
    return (
      <div className={variant === 'modal' ? 'relative' : ''}>
        {variant === 'modal' && onClose && (
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1">
            <X className="w-5 h-5" />
          </button>
        )}
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Your Guide Is Ready!</h3>
          <p className="text-gray-600 mb-6">
            Click below to download your free Charlotte Roofing Guide.
          </p>

          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold
                       rounded-lg hover:from-primary-light hover:to-primary
                       disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed
                       transition-all duration-200 flex items-center justify-center gap-2
                       shadow-lg shadow-primary/25 text-lg"
          >
            {isGeneratingPdf ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                <span>Download PDF</span>
              </>
            )}
          </button>

          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm font-semibold text-amber-800">Your Free Gift Is on the Way!</p>
                <p className="text-sm text-amber-700 mt-1">
                  We are sending a free surprise gift to <strong>{address}</strong>. Watch your mailbox!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={variant === 'modal' ? 'relative' : ''}>
      {variant === 'modal' && onClose && (
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1">
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <BookOpen className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Download Your Free Roofing Guide</h3>
        <p className="text-gray-600 text-sm">
          Get the complete 18-chapter Charlotte Roofing Guide as a PDF — plus a <strong>free surprise gift</strong> mailed to your door!
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
              className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg
                         focus:border-primary focus:ring-2 focus:ring-primary/10
                         transition-all duration-200 outline-none text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
              className="w-full px-3 py-3 border border-gray-200 rounded-lg
                         focus:border-primary focus:ring-2 focus:ring-primary/10
                         transition-all duration-200 outline-none text-sm"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            required
            className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none text-sm"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none text-sm"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Mailing Address (for your free gift!)"
            required
            className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none text-sm"
          />
        </div>

        <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
          <Gift className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800">
            <strong>Bonus:</strong> We will send a free surprise roofing gift to your address — no cost, no obligation!
          </p>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full py-4 bg-gradient-to-r from-secondary to-red-600 text-white font-semibold
                     rounded-lg hover:from-red-600 hover:to-red-700
                     disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed
                     transition-all duration-200 flex items-center justify-center gap-2
                     shadow-lg shadow-secondary/25 hover:shadow-secondary/40 text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5" />
              <span>Get My Free Guide + Gift</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Your information is safe. We never share or sell your data.
        </p>
      </form>
    </div>
  )
}
