'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, Wrench, RefreshCw, Search, Calculator } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  options: { label: string; value: string; points: number }[]
}

const questions: QuizQuestion[] = [
  {
    id: 'age',
    question: 'How old is your roof?',
    options: [
      { label: '0-10 years', value: 'new', points: 0 },
      { label: '10-20 years', value: 'mid', points: 1 },
      { label: '20-30 years', value: 'aging', points: 3 },
      { label: '30+ years', value: 'old', points: 5 },
    ]
  },
  {
    id: 'material',
    question: 'What type of roofing material do you have?',
    options: [
      { label: 'Asphalt Shingles', value: 'shingles', points: 1 },
      { label: 'Metal Roofing', value: 'metal', points: 0 },
      { label: 'Tile or Slate', value: 'tile', points: 0 },
      { label: 'Not Sure', value: 'unknown', points: 1 },
    ]
  },
  {
    id: 'damage',
    question: 'How would you describe the visible damage?',
    options: [
      { label: 'No visible damage', value: 'none', points: 0 },
      { label: 'Minor — a few missing or cracked shingles', value: 'minor', points: 1 },
      { label: 'Moderate — multiple areas affected', value: 'moderate', points: 3 },
      { label: 'Severe — large sections damaged or sagging', value: 'severe', points: 5 },
    ]
  },
  {
    id: 'leaks',
    question: 'Are you experiencing any leaks?',
    options: [
      { label: 'No leaks', value: 'none', points: 0 },
      { label: 'Small, isolated leak in one spot', value: 'small', points: 2 },
      { label: 'Multiple leaks or recurring leaks', value: 'multiple', points: 5 },
    ]
  },
  {
    id: 'storm',
    question: 'Has your roof been damaged by a recent storm?',
    options: [
      { label: 'No recent storm damage', value: 'no', points: 0 },
      { label: 'Yes — hail, wind, or fallen tree damage', value: 'yes', points: 2 },
    ]
  },
  {
    id: 'budget',
    question: 'What is your budget priority?',
    options: [
      { label: 'Lowest cost right now', value: 'low', points: 0 },
      { label: 'Best long-term value', value: 'value', points: 1 },
      { label: 'Maximum lifespan and quality', value: 'quality', points: 2 },
    ]
  },
]

type Recommendation = 'repair' | 'replace' | 'inspect'

interface QuizResult {
  recommendation: Recommendation
  title: string
  description: string
  costRange: string
  nextSteps: string[]
}

function getResult(totalPoints: number, answers: Record<string, string>): QuizResult {
  const hasStormDamage = answers.storm === 'yes'
  const hasMultipleLeaks = answers.leaks === 'multiple'
  const isSevere = answers.damage === 'severe'
  const isOld = answers.age === 'old' || answers.age === 'aging'

  // Replace recommendation
  if (totalPoints >= 12 || (isSevere && isOld) || (hasMultipleLeaks && isOld)) {
    return {
      recommendation: 'replace',
      title: 'Full Roof Replacement Recommended',
      description: 'Based on your answers, your roof is showing signs that repair would be a temporary fix at best. A full replacement will be more cost-effective long-term and protect your home for decades.',
      costRange: '$8,500 – $17,500 for a typical Charlotte home (architectural shingles)',
      nextSteps: [
        'Get 3 written estimates from licensed Charlotte roofers',
        'Check if storm damage qualifies for insurance coverage',
        'Ask about financing options — most Charlotte roofers offer payment plans',
        'Use our free instant estimate tool for a quick ballpark figure',
      ]
    }
  }

  // Repair recommendation
  if (totalPoints <= 5 && !hasMultipleLeaks && !isSevere) {
    return {
      recommendation: 'repair',
      title: 'Roof Repair Should Be Sufficient',
      description: 'Your roof appears to be in reasonable condition with issues that can likely be addressed with targeted repairs rather than a full replacement. This is the more cost-effective option for your situation.',
      costRange: '$300 – $1,500 for typical Charlotte roof repairs',
      nextSteps: [
        'Schedule a professional inspection to confirm the repair scope',
        'Get 2-3 repair estimates from licensed contractors',
        'Ask about warranty coverage on the repair work',
        hasStormDamage ? 'File an insurance claim for the storm damage — your deductible may cover the repair cost' : 'Schedule annual inspections going forward to catch issues early',
      ]
    }
  }

  // Inspection recommendation (middle ground)
  return {
    recommendation: 'inspect',
    title: 'Professional Inspection Recommended',
    description: 'Your situation falls in between a simple repair and a full replacement. A professional inspection will determine the extent of the issues and whether a targeted repair or full replacement makes more financial sense.',
    costRange: '$150 – $350 for a professional roof inspection in Charlotte',
    nextSteps: [
      'Schedule a professional roof inspection (most Charlotte roofers offer free inspections)',
      'Ask the inspector to provide both repair and replacement estimates for comparison',
      'Use the 30% rule: if repair costs exceed 30% of replacement cost, replacement is usually the better value',
      hasStormDamage ? 'Document all storm damage and file an insurance claim before repairs begin' : 'Consider your timeline — how long do you plan to stay in the home?',
    ]
  }
}

export default function RepairReplaceQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = questions[currentStep]
  const totalSteps = questions.length

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const goBack = () => {
    if (showResult) {
      setShowResult(false)
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  if (showResult) {
    const totalPoints = questions.reduce((sum, q) => {
      const selectedOption = q.options.find(o => o.value === answers[q.id])
      return sum + (selectedOption?.points || 0)
    }, 0)

    const result = getResult(totalPoints, answers)

    const resultIcons = {
      repair: Wrench,
      replace: RefreshCw,
      inspect: Search,
    }
    const resultColors = {
      repair: 'bg-green-50 border-green-200 text-green-800',
      replace: 'bg-blue-50 border-blue-200 text-blue-800',
      inspect: 'bg-amber-50 border-amber-200 text-amber-800',
    }
    const ResultIcon = resultIcons[result.recommendation]

    return (
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-xl border-2 p-8 ${resultColors[result.recommendation]}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ResultIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">{result.title}</h3>
          </div>
          <p className="mb-4 leading-relaxed">{result.description}</p>
          <div className="bg-white/60 rounded-lg p-4 mb-6">
            <p className="font-semibold text-sm">Estimated Cost Range:</p>
            <p className="text-lg font-bold">{result.costRange}</p>
          </div>

          <h4 className="font-bold mb-3">Recommended Next Steps:</h4>
          <ul className="space-y-2 mb-8">
            {result.nextSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link
            href="/estimate"
            className="flex-1 text-center px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
          >
            <Calculator className="w-5 h-5 inline mr-2" />
            Get Free Instant Estimate
          </Link>
          <Link
            href="/companies"
            className="flex-1 text-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
          >
            Find Charlotte Roofers
          </Link>
        </div>

        <button
          onClick={resetQuiz}
          className="w-full mt-4 text-center text-sm text-gray-500 hover:text-gray-700 py-2"
        >
          Take the quiz again
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
        {currentQuestion.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option) => {
          const isSelected = answers[currentQuestion.id] === option.value
          return (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition ${
                isSelected
                  ? 'border-primary bg-primary/5 text-primary font-medium'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg transition ${
            currentStep === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={goNext}
          disabled={!answers[currentQuestion.id]}
          className={`flex items-center gap-1 px-6 py-2 rounded-lg font-medium transition ${
            answers[currentQuestion.id]
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {currentStep === totalSteps - 1 ? 'See Results' : 'Next'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
