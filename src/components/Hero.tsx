'use client';

import { motion } from 'framer-motion';
import { Play, Zap, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="h-4 w-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">Backed by Y Combinator</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Generate{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Khan Academy-Style
              </span>{' '}
              Educational Videos{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                from Any Content
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Transform PDFs, text, and documents into engaging educational videos in just{' '}
              <span className="font-semibold text-blue-600">15 seconds</span> using AI. 
              No manual editing required.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15s</div>
                <div className="text-sm text-gray-500">Generation Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-500">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1.2</div>
                <div className="text-sm text-gray-500">GPA Increase</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Try Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>View API</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* Main Video Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Video Preview */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden mb-6 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </motion.button>
                </div>
                {/* Fake video elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Photosynthesis Process</div>
                    <div className="bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-600">Upload Content</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-600">AI Processing</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Play className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-600">Video Ready</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-xs text-gray-600">95% retention</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            >
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-gray-600">15s generation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
