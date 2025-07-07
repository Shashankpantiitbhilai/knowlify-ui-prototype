'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Building, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: '/month',
    description: 'Perfect for trying out Knowlify',
    icon: Rocket,
    features: [
      '10 videos per month',
      'Basic customization',
      'Standard voices',
      'Email support',
      '720p resolution',
      'Basic analytics'
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Pro',
    price: 49,
    period: '/month',
    description: 'Most popular for growing teams',
    icon: Star,
    features: [
      '500 videos per month',
      'Full customization',
      'Premium voices',
      'API access',
      'Priority support',
      '1080p resolution',
      'Advanced analytics',
      'Custom branding',
      'Webhook integration'
    ],
    cta: 'Start Pro Trial',
    popular: true,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    icon: Building,
    features: [
      'Unlimited videos',
      'Custom branding',
      'White-label solution',
      'Dedicated support',
      'SLA guarantee',
      '4K resolution',
      'Advanced analytics',
      'Custom integrations',
      'On-premise deployment',
      'Training & onboarding'
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-600 to-pink-600'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 p-1 rounded-xl">
            <div className="flex">
              <button className="px-6 py-3 rounded-lg bg-white shadow-sm font-medium text-gray-900">
                Monthly
              </button>
              <button className="px-6 py-3 rounded-lg font-medium text-gray-600">
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    {typeof plan.price === 'number' && (
                      <span className="text-gray-500 text-xl mr-1">$</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I change plans anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                question: 'What happens if I exceed my video limit?',
                answer: 'We\'ll notify you when you\'re close to your limit. You can upgrade or purchase additional videos.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans.'
              },
              {
                question: 'Is there an API rate limit?',
                answer: 'API rate limits vary by plan. Pro plan includes 1000 requests/hour, Enterprise has custom limits.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to revolutionize your educational content?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of educators, training teams, and organizations using Knowlify 
              to create engaging video content.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
