'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState('annually')
  const [openFAQ, setOpenFAQ] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Generate chart data on client side only to avoid hydration mismatch
  const [chartData, setChartData] = useState(() =>
    Array.from({ length: 4 }, () => Array.from({ length: 6 }, () => 50))
  )

  useEffect(() => {
    // Generate random data after component mounts (client-side only)
    setChartData(
      Array.from({ length: 4 }, () =>
        Array.from({ length: 6 }, () => Math.random() * 100)
      )
    )
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleCrawl = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const testimonials = [
    {
      quote: 'In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!',
      author: 'Jamie Marshall',
      role: 'Co-founder, Exponent',
    },
    {
      quote: 'This platform has revolutionized how we handle our operations. Highly recommend!',
      author: 'Sarah Chen',
      role: 'CEO, DataFlow Inc',
    },
    {
      quote: 'Outstanding support and incredible features. Worth every penny.',
      author: 'Michael Rodriguez',
      role: 'Operations Manager, TechCorp',
    },
  ]

  const faqs = [
    {
      question: 'What is Brillance and who is it for?',
      answer: 'Brillance is a powerful platform designed for teams and businesses of all sizes who need to streamline their operations, manage schedules, and gain actionable insights from their data.',
    },
    {
      question: 'How does the custom contract billing work?',
      answer: 'Our flexible billing system allows you to customize payment terms based on your specific contract needs. You can choose annual or monthly billing with volume discounts.',
    },
    {
      question: 'Can I integrate Brillance with my existing tools?',
      answer: 'Yes! Brillance integrates seamlessly with your favorite tools including Slack, Zapier, GitHub, Notion, and many more. Check our integrations page for the complete list.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 email support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise customers.',
    },
    {
      question: 'Is my data secure with Brillance?',
      answer: 'Absolutely. We use enterprise-grade encryption, comply with GDPR and SOC 2, and perform regular security audits to ensure your data is always protected.',
    },
    {
      question: 'How do I get started with Brillance?',
      answer: 'Getting started is easy! Sign up for a free account, choose your plan, and you can start using Brillance immediately without any setup required.',
    },
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams getting started.',
      price: '$0',
      period: billingPeriod === 'annually' ? '/year' : '/month',
      features: ['Up to 3 projects', 'Basic documentation tools', 'Email support', '1GB storage'],
      cta: 'Start for free',
      isPrimary: false,
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing teams and businesses.',
      price: billingPeriod === 'annually' ? '$16' : '$19',
      period: '/user/year',
      features: [
        'Unlimited projects',
        'Advanced documentation tools',
        'Analytics & insights',
        '100GB storage',
        'API access',
        'Priority support',
      ],
      cta: 'Get started',
      isPrimary: true,
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations and enterprises.',
      price: '$160',
      period: '/user/year',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited storage',
        'Advanced security',
        '24/7 phone support',
      ],
      cta: 'Contact sales',
      isPrimary: false,
    },
  ]

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className='min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col'>
        {/* Navigation */}
        <nav className='border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-2 group'>
              <span className='font-serif text-xl font-bold tracking-tight'>Brillance</span>
            </Link>

            <div className='hidden md:flex items-center gap-8'>
              <Link href='#products' className='text-foreground/70 hover:text-foreground transition-colors text-sm'>
                Products
              </Link>
              <Link href='#pricing' className='text-foreground/70 hover:text-foreground transition-colors text-sm'>
                Pricing
              </Link>
              <Link href='#docs' className='text-foreground/70 hover:text-foreground transition-colors text-sm'>
                Docs
              </Link>
            </div>

            <div className='flex items-center gap-4'>
              <button
                onClick={toggleDarkMode}
                className='p-2 hover:bg-secondary rounded-lg transition-colors'
                aria-label='Toggle dark mode'
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href='#' className='text-foreground hover:text-foreground/80 transition-colors text-sm font-medium'>
                Log in
              </Link>
            </div>
          </div>
        </nav>

        <main className='flex-1'>
          {/* Hero Section */}
          <section className='relative overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-b from-transparent via-secondary/20 to-transparent pointer-events-none'></div>
              
              {/* Top right corner neon green glow */}
              <div className='absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none'>
                <div className='absolute inset-0 bg-gradient-radial from-lime-400/40 via-green-400/20 to-transparent blur-3xl rounded-full animate-pulse'></div>
                <svg className='absolute inset-0 w-full h-full opacity-50' viewBox='0 0 600 600'>
                  <defs>
                    <radialGradient id='neonTopRightGradient' cx='100%' cy='0%'>
                      <stop offset='0%' stopColor='rgb(163, 230, 53)' stopOpacity='0.6' />
                      <stop offset='50%' stopColor='rgb(34, 197, 94)' stopOpacity='0.3' />
                      <stop offset='100%' stopColor='transparent' stopOpacity='0' />
                    </radialGradient>
                  </defs>
                  <circle cx='600' cy='0' r='400' fill='url(#neonTopRightGradient)' />
                </svg>
              </div>
              
              {/* Bottom left corner neon green glow */}
              <div className='absolute -bottom-40 -left-40 w-[600px] h-[600px] pointer-events-none'>
                <div className='absolute inset-0 bg-gradient-radial from-lime-400/40 via-green-400/20 to-transparent blur-3xl rounded-full animate-pulse'></div>
                <svg className='absolute inset-0 w-full h-full opacity-50' viewBox='0 0 600 600'>
                  <defs>
                    <radialGradient id='neonBottomLeftGradient' cx='0%' cy='100%'>
                      <stop offset='0%' stopColor='rgb(163, 230, 53)' stopOpacity='0.6' />
                      <stop offset='50%' stopColor='rgb(34, 197, 94)' stopOpacity='0.3' />
                      <stop offset='100%' stopColor='transparent' stopOpacity='0' />
                    </radialGradient>
                  </defs>
                  <circle cx='0' cy='600' r='400' fill='url(#neonBottomLeftGradient)' />
                </svg>
              </div>
            </div>

            <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36'>
              <div className='text-center mb-16'>
                <div className='inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-lime-100 to-green-100 dark:from-lime-900/30 dark:to-green-900/30 border border-lime-200 dark:border-lime-800/50'>
                  <span className='text-sm font-semibold bg-gradient-to-r from-lime-600 to-green-600 dark:from-lime-300 dark:to-green-300 bg-clip-text text-transparent'>✨ Powered by Advanced AI</span>
                </div>
                <h1 className='font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight text-balance mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 dark:from-white dark:via-white dark:to-white/80 bg-clip-text text-transparent'>
                  Extract website data instantly
                </h1>
                <p className='text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-balance leading-relaxed'>
                  Streamline your data collection with powerful web crawling automation for every website, tailored to your needs.
                </p>
              </div>

              <div className='flex justify-center mb-8'>
                <form onSubmit={handleCrawl} className='w-full max-w-2xl'>
                  <div className='relative mb-6'>
                    <textarea
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder='Enter website URL or paste HTML content here...'
                      className='w-full px-6 py-4 rounded-3xl bg-white/95 dark:bg-secondary/50 text-foreground placeholder-foreground/40 border-2 border-border dark:border-border/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-secondary focus:border-lime-400 resize-none font-sans text-sm sm:text-base transition-all shadow-lg backdrop-blur-sm'
                      rows={8}
                    />
                  </div>

                  <div className='flex justify-center relative'>
                    <div className='absolute inset-0 bg-gradient-to-r from-lime-300/30 via-emerald-300/20 to-cyan-300/20 rounded-full blur-3xl w-96 h-48 mx-auto pointer-events-none'></div>
                    <button
                      type='submit'
                      disabled={isLoading || !url.trim()}
                      className='relative px-10 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-black rounded-full font-semibold hover:shadow-2xl hover:shadow-lime-400/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 shadow-xl shadow-lime-400/30 hover:brightness-110'
                    >
                      {isLoading ? (
                        <span className='flex items-center justify-center gap-2'>
                          <span className='animate-spin'>⚙️</span>
                          Crawling...
                        </span>
                      ) : (
                        'Start crawling'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Dashboard Preview */}
          <section className='bg-linear-to-b from-transparent to-secondary/20 py-20 sm:py-32 border-t border-border/30 relative'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-secondary/30 border border-border/40 relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl'></div>
                <div className='bg-gradient-to-r from-foreground/95 to-foreground/90 dark:from-foreground/20 dark:to-foreground/15 text-background dark:text-foreground px-6 sm:px-8 py-5 flex items-center justify-between border-b border-lime-300/30 dark:border-lime-800/20'>
                  <h3 className='font-serif text-lg font-semibold'>Data Visualization Dashboard</h3>
                  <div className='w-12 h-8 bg-gradient-to-r from-lime-400 to-green-500 rounded-full shadow-lg shadow-lime-400/40'></div>
                </div>
                <div className='p-8 sm:p-12 bg-white dark:bg-secondary/10 min-h-96 flex items-center justify-center relative'>
                  <div className='absolute inset-0 bg-gradient-radial from-lime-100/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl'></div>
                  <div className='text-center text-foreground/50 dark:text-foreground/40 relative z-10'>
                    <p className='text-lg font-medium'>Dashboard Preview Area</p>
                    <p className='text-sm mt-2'>Analytics and insights will appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Features */}
          <section className='py-20 sm:py-28 border-t border-border/30'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-b border-border/30 pb-20'>
                <div className='space-y-2'>
                  <h3 className='font-serif text-lg font-semibold text-foreground'>Plan your schedules</h3>
                  <p className='text-foreground/65 text-sm leading-relaxed'>Streamline customer subscriptions and billing with automated scheduling tools.</p>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-serif text-lg font-semibold text-foreground'>Analytics & insights</h3>
                  <p className='text-foreground/65 text-sm leading-relaxed'>Transform your business data into actionable insights with real-time analytics.</p>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-serif text-lg font-semibold text-foreground'>Collaborate seamlessly</h3>
                  <p className='text-foreground/65 text-sm leading-relaxed'>Keep your team aligned with shared dashboards and collaborative workflows.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <span className='inline-block px-3 py-1 bg-secondary rounded-full text-sm text-foreground/70 mb-6'>Social Proof</span>
                <h2 className='font-serif text-4xl sm:text-5xl font-normal text-balance mb-4'>
                  Confidence backed by results
                </h2>
                <p className='text-foreground/70 max-w-2xl mx-auto text-balance'>
                  Our customers achieve more each day because their tools are simple, powerful, and clear.
                </p>
              </div>

              <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8'>
                {['Acute', 'Acute', 'Acute', 'Acute', 'Acute', 'Acute', 'Acute', 'Acute'].map((company, i) => (
                  <div key={i} className='flex items-center justify-center aspect-square bg-secondary dark:bg-foreground/5 rounded-xl border border-border/30'>
                    <span className='text-sm font-semibold text-foreground/50'>{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Showcase */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className='space-y-8'>
                  <div className='relative pl-6'>
                    <div className='absolute left-0 top-0 w-1 h-10 bg-gradient-to-b from-lime-400 to-green-500 rounded-full'></div>
                    <h3 className='font-serif text-lg font-semibold mb-3 text-foreground'>Plan your schedules</h3>
                    <p className='text-foreground/70 text-sm'>Explore your data, build your dashboard, bring your team together.</p>
                  </div>
                  <div className='relative pl-6'>
                    <div className='absolute left-0 top-0 w-1 h-10 bg-gradient-to-b from-lime-400 to-green-500 rounded-full'></div>
                    <h3 className='font-serif text-lg font-semibold mb-3 text-foreground'>Data to insights in minutes</h3>
                    <p className='text-foreground/70 text-sm'>Transform raw data into actionable insights with powerful analytics tools.</p>
                  </div>
                  <div className='relative pl-6'>
                    <div className='absolute left-0 top-0 w-1 h-10 bg-gradient-to-b from-lime-400 to-green-500 rounded-full'></div>
                    <h3 className='font-serif text-lg font-semibold mb-3 text-foreground'>Collaborate seamlessly</h3>
                    <p className='text-foreground/70 text-sm'>Work together in real-time with your team and share insights instantly.</p>
                  </div>
                </div>
                <div className='bg-gradient-to-br from-lime-100/40 to-green-100/30 dark:from-lime-900/20 dark:to-green-900/10 rounded-3xl h-96 border-2 border-lime-300/50 dark:border-lime-800/30 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-radial from-lime-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className='w-40 h-40 bg-gray-300 dark:bg-gray-700 rounded-lg shrink-0'></div>
                <div>
                  <blockquote className='font-serif text-3xl sm:text-4xl font-normal leading-tight text-balance mb-8'>
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <p className='font-semibold text-foreground mb-1'>{testimonials[currentTestimonial].author}</p>
                  <p className='text-foreground/70 text-sm mb-8'>{testimonials[currentTestimonial].role}</p>
                  <div className='flex items-center gap-4'>
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                      className='p-2 border border-border/50 rounded-full hover:bg-secondary transition-colors'
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                      className='p-2 border border-border/50 rounded-full hover:bg-secondary transition-colors'
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='font-serif text-4xl sm:text-5xl font-normal text-balance mb-4'>
                  Built for absolute clarity and focused work
                </h2>
                <p className='text-foreground/70 max-w-2xl mx-auto text-balance'>
                  Stay focused with tools that organize, connect and turn information into confident decisions.
                </p>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='font-serif text-2xl font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>Smart. Simple. Brilliant.</h3>
                    <p className='text-foreground/70 leading-relaxed'>Your data is beautifully organized so you see everything clearly without the clutter.</p>
                    <div className='mt-6 bg-gradient-to-br from-lime-100/50 to-green-100/30 dark:from-lime-900/20 dark:to-green-900/10 rounded-3xl p-6 h-48 border border-lime-300/30 dark:border-lime-800/20'></div>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div>
                    <h3 className='font-serif text-xl font-semibold mb-2'>Your work, in sync</h3>
                    <p className='text-foreground/70'>Every update flows instantly across your team and keeps collaboration effortless and fast.</p>
                    <div className='mt-6 space-y-4'>
                      <div className='bg-secondary dark:bg-foreground/5 rounded-xl p-4 flex items-gap-3 border border-border/30'>
                        <div className='w-8 h-8 rounded-full bg-gray-400 shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-sm font-medium'>Team updates flow seamlessly</p>
                        </div>
                      </div>
                      <div className='bg-secondary dark:bg-foreground/5 rounded-xl p-4 flex items-gap-3 border border-border/30'>
                        <div className='flex gap-2 shrink-0'>
                          <div className='w-8 h-8 rounded-full bg-gray-400'></div>
                          <div className='w-8 h-8 rounded-full bg-gray-500'></div>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-sm font-medium'>Hi everyone</p>
                        </div>
                      </div>
                      <div className='bg-secondary dark:bg-foreground/5 rounded-xl p-4 flex items-gap-3 border border-border/30'>
                        <div className='w-8 h-8 rounded-full bg-gray-400 shrink-0'></div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-sm font-medium'>Great work, everyone!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integration & Analytics */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='font-serif text-xl font-semibold mb-4'>Effortless integration</h3>
                  <p className='text-foreground/70 mb-8'>All your favorite tools connect in one place and work together seamlessly by design.</p>
                  <div className='flex justify-center'>
                    <div className='relative w-64 h-64'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center'>
                          <span className='text-white dark:text-black font-bold text-xl'>b</span>
                        </div>
                        <div className='absolute w-32 h-32 border-2 border-border/30 rounded-full'></div>
                        <div className='absolute w-40 h-40 border-2 border-border/20 rounded-full'></div>
                        <div className='absolute top-4 left-1/4 w-10 h-10 bg-blue-500 rounded-lg'></div>
                        <div className='absolute bottom-8 right-1/4 w-10 h-10 bg-purple-500 rounded-full'></div>
                        <div className='absolute top-1/4 right-4 w-8 h-8 bg-green-500'></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='font-serif text-xl font-semibold mb-4'>Numbers that speak</h3>
                  <p className='text-foreground/70 mb-8'>Track growth with precision and turn raw data into confident decisions you can trust.</p>
                  <div className='bg-secondary dark:bg-foreground/5 rounded-2xl p-8 border border-border/30'>
                    <p className='text-sm text-foreground/70 mb-2'>Invoiced Revenue</p>
                    <p className='font-serif text-4xl font-semibold mb-8'>$317,731.00</p>
                    <div className='space-y-2'>
                      {chartData.map((row, i) => (
                        <div key={i} className='flex items-end gap-2 h-16'>
                          {row.map((height, j) => (
                            <div
                              key={j}
                              className='flex-1 bg-linear-to-t from-foreground/40 to-foreground/20 rounded-t-lg'
                              style={{ height: `${height}%`, minHeight: '20%' }}
                            ></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Features */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <span className='inline-block px-3 py-1 bg-secondary rounded-full text-sm text-foreground/70 mb-6'>Platform Features</span>
              <h2 className='font-serif text-4xl sm:text-5xl font-normal text-balance mb-4'>
                Streamline your business operations
              </h2>
              <p className='text-foreground/70 max-w-2xl mx-auto text-balance'>
                Manage schedules, analyze data, and collaborate with your team all in one powerful platform.
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section id='pricing' className='py-20 sm:py-32 border-t border-border/30 bg-linear-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-20'>
                <span className='inline-block px-4 py-1.5 bg-secondary dark:bg-secondary/20 rounded-full text-sm text-foreground/80 dark:text-foreground/70 mb-6'>
                  💵 Plans & Pricing
                </span>
                <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-balance mb-6'>
                  Choose the perfect plan for your business
                </h2>
                <p className='text-foreground/70 max-w-2xl mx-auto text-balance text-lg'>
                  Scale your operations with flexible pricing that grows with your team. Start free, upgrade when you're ready.
                </p>
              </div>

              <div className='flex justify-center gap-3 sm:gap-4 mb-20'>
                <button
                  onClick={() => setBillingPeriod('annually')}
                  className={`px-6 sm:px-8 py-2.5 rounded-full font-medium transition-all ${
                    billingPeriod === 'annually'
                      ? 'bg-foreground text-background dark:bg-foreground/20 dark:text-foreground'
                      : 'bg-secondary dark:bg-secondary/20 text-foreground hover:bg-secondary/80 dark:hover:bg-secondary/30'
                  }`}
                >
                  Annually
                </button>
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 sm:px-8 py-2.5 rounded-full font-medium transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-foreground text-background dark:bg-foreground/20 dark:text-foreground'
                      : 'bg-secondary dark:bg-secondary/20 text-foreground hover:bg-secondary/80 dark:hover:bg-secondary/30'
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                {pricingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`rounded-3xl p-8 transition-all duration-300 border backdrop-blur-sm ${
                      plan.isPrimary
                        ? 'bg-gradient-to-br from-lime-50/80 to-green-50/60 dark:from-lime-900/25 dark:to-green-900/15 border-lime-300/50 dark:border-lime-800/40 scale-100 md:scale-105 shadow-2xl shadow-lime-400/25'
                        : 'bg-white/90 dark:bg-foreground/5 text-foreground border-border/40 hover:border-lime-300/30 hover:shadow-lg hover:shadow-lime-400/10'
                    }`}
                  >
                    <h3 className='font-serif text-2xl font-semibold mb-3'>{plan.name}</h3>
                    <p className={`text-sm mb-8 leading-relaxed ${plan.isPrimary ? 'text-foreground/80' : 'text-foreground/70'}`}>
                      {plan.description}
                    </p>
                    <div className='mb-10'>
                      <span className='font-serif text-5xl font-semibold'>{plan.price}</span>
                      <span className={`text-sm ml-2 ${plan.isPrimary ? 'text-foreground/70' : 'text-foreground/70'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <button
                      className={`w-full py-3 rounded-full font-medium transition-all mb-10 ${
                        plan.isPrimary
                          ? 'bg-gradient-to-r from-lime-400 to-green-500 text-black hover:shadow-lg hover:shadow-lime-400/30 hover:scale-105'
                          : 'bg-foreground text-background hover:opacity-90'
                      }`}
                    >
                      {plan.cta}
                    </button>
                    <div className='space-y-4'>
                      {plan.features.map((feature, i) => (
                        <div key={i} className='flex items-start gap-3'>
                          <span className={`text-lg shrink-0 ${plan.isPrimary ? 'text-lime-500' : 'text-foreground/50'}`}>✓</span>
                          <span className={`text-sm ${plan.isPrimary ? 'text-foreground/90' : 'text-foreground/70'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className='py-16 sm:py-24 border-t border-border/50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                  <h2 className='font-serif text-3xl sm:text-4xl font-normal mb-4 text-balance'>
                    Frequently Asked Questions
                  </h2>
                  <p className='text-foreground/70'>Explore your data, build your dashboard, bring your team together.</p>
                </div>

                <div className='space-y-4'>
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className='border border-border/50 rounded-lg overflow-hidden transition-all'
                    >
                      <button
                        onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                        className='w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors'
                      >
                        <span className='font-medium text-left'>{faq.question}</span>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFAQ === idx && (
                        <div className='px-6 py-4 border-t border-border/50 bg-secondary/50 dark:bg-secondary/20'>
                          <p className='text-foreground/70 text-sm'>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className='py-16 sm:py-24 border-t border-border/50 relative overflow-hidden'>
            <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='font-serif text-4xl sm:text-5xl font-normal text-balance mb-6'>
                Ready to transform your business?
              </h2>
              <p className='text-foreground/70 text-balance mb-8'>
                Join thousands of businesses streamlining their operations, managing schedules, and growing with data-driven insights.
              </p>
              <div className='relative inline-block'>
                {/* Glow effect behind button */}
                <div className='absolute inset-0 -inset-x-16 -inset-y-8 bg-gradient-radial from-blue-200/40 via-purple-200/20 to-transparent blur-3xl pointer-events-none'></div>
                <button className='relative px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-foreground/30 hover:shadow-xl hover:shadow-foreground/40'>
                  Start for free
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className='border-t border-border/50 py-12 mt-auto'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border/50'>
              <div>
                <h4 className='font-serif text-sm font-semibold mb-4'>Brillance</h4>
                <p className='text-foreground/70 text-sm'>Coding made effortless</p>
                <div className='flex items-center gap-4 mt-4'>
                  <Link href='#' className='text-foreground/70 hover:text-foreground transition-colors'>
                    𝕏
                  </Link>
                  <Link href='#' className='text-foreground/70 hover:text-foreground transition-colors'>
                    in
                  </Link>
                  <Link href='#' className='text-foreground/70 hover:text-foreground transition-colors'>
                    ⚡
                  </Link>
                </div>
              </div>

              <div>
                <h4 className='font-semibold text-sm mb-4'>Product</h4>
                <ul className='space-y-2 text-sm text-foreground/70'>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Real-time Previews
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Multi-Agent Coding
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-sm mb-4'>Company</h4>
                <ul className='space-y-2 text-sm text-foreground/70'>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Our team
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Brand
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-sm mb-4'>Resources</h4>
                <ul className='space-y-2 text-sm text-foreground/70'>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-foreground transition-colors'>
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/50'>
              <p>© 2026 Brillance. All rights reserved.</p>
              <div className='flex items-center gap-6'>
                <Link href='#' className='hover:text-foreground/70 transition-colors'>
                  Privacy Policy
                </Link>
                <Link href='#' className='hover:text-foreground/70 transition-colors'>
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
