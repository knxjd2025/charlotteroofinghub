import { describe, it, expect } from 'vitest'
import {
  sanitizeString,
  isValidEmail,
  isValidPhone,
  formatPhoneNumber,
  isValidAddress,
  normalizeEmail,
} from '@/lib/validation'

// ── Test 1: sanitizeString strips HTML and enforces max length ──
describe('sanitizeString', () => {
  it('strips angle brackets, trims whitespace, and enforces max length', () => {
    expect(sanitizeString('  hello  ')).toBe('hello')
    expect(sanitizeString('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script')
    expect(sanitizeString('a'.repeat(200), 50)).toBe('a'.repeat(50))
    expect(sanitizeString('')).toBe('')
    // Non-string input coerced
    expect(sanitizeString(null as unknown as string)).toBe('')
    expect(sanitizeString(undefined as unknown as string)).toBe('')
  })
})

// ── Test 2: isValidEmail validates email formats correctly ──
describe('isValidEmail', () => {
  it('accepts valid emails and rejects invalid ones', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('name.last@domain.co')).toBe(true)
    expect(isValidEmail('user+tag@gmail.com')).toBe(true)

    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('notanemail')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
    expect(isValidEmail('user@')).toBe(false)
    expect(isValidEmail('user@.com')).toBe(false)
    expect(isValidEmail(null as unknown as string)).toBe(false)
    // Over 254 chars
    expect(isValidEmail('a'.repeat(250) + '@b.com')).toBe(false)
  })
})

// ── Test 3: isValidPhone validates US phone numbers ──
describe('isValidPhone', () => {
  it('accepts 10 and 11 digit US phone numbers in various formats', () => {
    expect(isValidPhone('(704) 555-1234')).toBe(true)
    expect(isValidPhone('7045551234')).toBe(true)
    expect(isValidPhone('704-555-1234')).toBe(true)
    expect(isValidPhone('17045551234')).toBe(true) // 11 digits with country code

    expect(isValidPhone('')).toBe(false)
    expect(isValidPhone('123')).toBe(false)
    expect(isValidPhone('123456789012')).toBe(false) // 12 digits
    expect(isValidPhone(null as unknown as string)).toBe(false)
  })
})

// ── Test 4: formatPhoneNumber formats digits progressively ──
describe('formatPhoneNumber', () => {
  it('formats phone input as (XXX) XXX-XXXX progressively', () => {
    expect(formatPhoneNumber('7')).toBe('7')
    expect(formatPhoneNumber('704')).toBe('704')
    expect(formatPhoneNumber('7045')).toBe('(704) 5')
    expect(formatPhoneNumber('704555')).toBe('(704) 555')
    expect(formatPhoneNumber('7045551')).toBe('(704) 555-1')
    expect(formatPhoneNumber('7045551234')).toBe('(704) 555-1234')
    // Strips non-digit chars
    expect(formatPhoneNumber('(704) 555-1234')).toBe('(704) 555-1234')
  })
})

// ── Test 5: isValidAddress and normalizeEmail ──
describe('isValidAddress and normalizeEmail', () => {
  it('validates addresses by length range', () => {
    expect(isValidAddress('123 Main St, Charlotte, NC 28202')).toBe(true)
    expect(isValidAddress('Hi')).toBe(false) // too short
    expect(isValidAddress('')).toBe(false)
    expect(isValidAddress('a'.repeat(301))).toBe(false) // too long
    expect(isValidAddress(null as unknown as string)).toBe(false)
  })

  it('normalizes email to lowercase and trimmed', () => {
    expect(normalizeEmail('  User@EXAMPLE.COM  ')).toBe('user@example.com')
    expect(normalizeEmail('TEST@gmail.com')).toBe('test@gmail.com')
  })
})
