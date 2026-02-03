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
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Subscription Plans</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Choose the perfect plan for your needs. Upgrade or downgrade at any time.
        </p>
      </div>

      {/* Current Plan Banner */}
      {plans.some(p => p.current) && (
        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/20 via-primary/10 to-cyan-500/10 backdrop-blur-xl p-6 md:p-8">
          <div className="relative space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Current Plan: Pro</h2>
                <p className="text-muted-foreground mt-1">Your subscription renews on March 15, 2024</p>
              </div>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Manage Billing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Plan Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Billing Cycle</p>
                <p className="font-semibold">Monthly</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Renewal Date</p>
                <p className="font-semibold">Mar 15, 2024</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Monthly Cost</p>
                <p className="font-semibold">$29.00</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">API Usage</p>
                <p className="font-semibold">45% of quota</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-xl border backdrop-blur-xl p-6 md:p-8 transition-all duration-300 flex flex-col ${
              plan.current
                ? 'border-primary/50 bg-gradient-to-br from-primary/20 via-primary/10 to-cyan-500/10 md:scale-105 md:z-10 shadow-lg shadow-primary/20'
                : 'border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-primary/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              </div>
            )}

            <div className="space-y-2 mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>

            {/* Pricing */}
            <div className="space-y-1 mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className={`w-full mb-6 ${
                plan.current
                  ? 'bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90'
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              {plan.current ? 'Current Plan' : 'Choose Plan'}
            </Button>

            {/* Features List */}
            <div className="space-y-3 flex-1">
              {plan.features.map((feature, featureIdx) => (
                <div key={featureIdx} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${
                    feature.included ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact for Enterprise */}
            {plan.name === 'Enterprise' && (
              <Button variant="outline" className="w-full mt-6 border-white/20 hover:bg-white/10">
                Contact Sales
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
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
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-4 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
