'use client';

import { motion } from 'framer-motion';
import { Zap, Wand2, FileText, Palette, Code, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate educational videos in just 15 seconds. No waiting, no delays.',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  },
  {
    icon: Wand2,
    title: 'No Manual Editing',
    description: 'AI handles visuals, script, and voiceover automatically. Just upload and go.',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: FileText,
    title: 'Multiple Formats',
    description: 'Works with PDFs, markdown, plain text, and more input formats.',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Palette,
    title: 'Full Customization',
    description: 'Adjust voice, branding, colors, and pacing to match your style.',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Code,
    title: 'Developer-Friendly API',
    description: 'Simple WebSocket API with webhooks for seamless integration.',
    color: 'from-indigo-400 to-blue-500',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: '95% retention rate vs 10% with textbooks. 1.2 GPA increase average.',
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Knowlify?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI technology that transforms education with proven results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative ${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your educational content?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of educators and training teams who are already using Knowlify 
              to create engaging video content.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
              Start Creating Videos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
