'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Knowlify</span>
                <div className="bg-orange-500 text-orange-100 text-xs font-medium px-2 py-1 rounded-full">
                  YC S24
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Transforming education with AI-powered video generation. Create engaging 
                Khan Academy-style educational videos from any content in just 15 seconds.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>hello@knowlify.net</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {[
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Features', href: '#features' },
                  { name: 'Demo', href: '#demo' },
                  { name: 'API', href: '#api' },
                  { name: 'Pricing', href: '#pricing' },
                  { name: 'Integrations', href: '#' },
                  { name: 'Changelog', href: '#' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Documentation', href: '#' },
                  { name: 'API Reference', href: '#' },
                  { name: 'Examples', href: '#' },
                  { name: 'Blog', href: '#' },
                  { name: 'Help Center', href: '#' },
                  { name: 'Status', href: '#' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Knowlify. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-gray-400">Backed by</span>
                <span className="font-semibold text-orange-400">Y Combinator</span>
              </div>
            </div>

            <div className="flex space-x-6">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookie Policy', href: '#' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
