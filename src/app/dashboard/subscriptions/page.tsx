'use client'

import { Button } from '@/components/ui/button'
import { Check, X, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    description: 'Perfect for getting started',
    features: [
      { name: '5 Projects', included: true },
      { name: '10,000 API calls/month', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Community support', included: true },
      { name: 'Custom domain', included: false },
      { name: 'Priority support', included: false },
    ],
    current: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'Unlimited API calls', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Email support', included: true },
      { name: 'Custom domain', included: true },
      { name: 'Priority support', included: false },
    ],
    current: true,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '/month',
    description: 'For large-scale operations',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'Custom domain', included: true },
    ],
    current: false,
  },
]

export default function SubscriptionsPage() {
  return (
    <div className="space-y-8 animate-fade-in-hero">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Subscription Plans</h1>
        <p className="text-white/70 text-lg md:text-xl font-light">
          Choose the perfect plan for your needs. Upgrade or downgrade at any time.
        </p>
      </div>

      {/* Current Plan Banner */}
      {plans.some(p => p.current) && (
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white">Current Plan: Pro</h2>
                <p className="text-white/60 mt-1">Your subscription renews on March 15, 2024</p>
              </div>
              <Button className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold px-6">
                Manage Billing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Plan Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/20">
              <div>
                <p className="text-xs text-white/60 mb-1">Billing Cycle</p>
                <p className="font-semibold text-white">Monthly</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Renewal Date</p>
                <p className="font-semibold text-white">Mar 15, 2024</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Monthly Cost</p>
                <p className="font-semibold text-white">$29.00</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">API Usage</p>
                <p className="font-semibold text-white">45% of quota</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl border backdrop-blur-md p-6 md:p-8 transition-all duration-500 flex flex-col ${
              plan.current
                ? 'border-white/30 bg-white/15 md:scale-105 md:z-10 md:shadow-xl md:shadow-white/10'
                : 'border-white/20 bg-white/10 hover:border-white/30 hover:bg-white/15'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-2xl">
                  POPULAR
                </div>
              </div>
            )}

            <div className="space-y-2 mb-6">
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-white/60 text-sm">{plan.description}</p>
            </div>

            {/* Pricing */}
            <div className="space-y-1 mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/60">{plan.period}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className={`w-full mb-6 rounded-full font-semibold ${
                plan.current
                  ? 'bg-white text-black hover:bg-slate-100'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              {plan.current ? 'Current Plan' : 'Choose Plan'}
            </Button>

            {/* Features List */}
            <div className="space-y-3 flex-1">
              {plan.features.map((feature, featureIdx) => (
                <div key={featureIdx} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-white/40 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${
                    feature.included ? 'text-white/90' : 'text-white/60'
                  }`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact for Enterprise */}
            {plan.name === 'Enterprise' && (
              <Button className="w-full mt-6 border border-white/20 bg-white/10 text-white hover:bg-white/20 rounded-full font-semibold">
                Contact Sales
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: 'Can I change my plan anytime?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, bank transfers, and digital payment methods.',
            },
            {
              q: 'Is there a free trial?',
              a: 'Yes! Start with our Free plan and upgrade whenever you\'re ready. No credit card required.',
            },
            {
              q: 'What happens if I exceed my quota?',
              a: 'We\'ll notify you when you reach 80% usage. You can upgrade your plan to increase limits.',
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 hover:border-white/30 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="font-semibold mb-2 text-white">{faq.q}</h3>
              <p className="text-sm text-white/60">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
