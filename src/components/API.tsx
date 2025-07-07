'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Plug, Webhook, BookOpen, Terminal } from 'lucide-react';

const codeExample = `import knowlify

# Initialize the client
client = knowlify.Client(api_key="your_api_key")

# Generate video from content
task = client.generate_video(
    content="path/to/your/content.pdf",
    voice_type="professional_female",
    style="khan_academy",
    webhook_url="https://your-app.com/webhook"
)

# Check status
status = client.get_status(task.id)
print(f"Video ready: {status.video_url}")

# Or use WebSocket for real-time updates
@client.on_complete
def handle_completion(video_data):
    print(f"Video generated: {video_data.url}")
    
client.connect()`;

export function API() {
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'curl', name: 'cURL', icon: '🌐' },
  ];

  return (
    <section id="api" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Developer-Friendly{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              API
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate Knowlify&apos;s power into your applications with just a few lines of code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* API Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Plug,
                  title: 'Simple Integration',
                  description: 'RESTful API with WebSocket support for real-time updates'
                },
                {
                  icon: Webhook,
                  title: 'Webhooks',
                  description: 'Asynchronous processing with automatic notifications'
                },
                {
                  icon: BookOpen,
                  title: 'Comprehensive Docs',
                  description: 'Detailed documentation with examples and SDKs'
                },
                {
                  icon: Terminal,
                  title: 'Multiple Languages',
                  description: 'SDKs available for Python, JavaScript, Go, and more'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Start */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-gray-300">Get your API key from dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-gray-300">Install the SDK: <code className="bg-gray-700 px-2 py-1 rounded text-sm">pip install knowlify</code></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-gray-300">Start generating videos!</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
          >
            {/* Code Header */}
            <div className="bg-gray-750 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setSelectedLanguage(lang.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                        selectedLanguage === lang.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-600'
                      }`}
                    >
                      <span>{lang.icon}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-300">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="language-python">{codeExample}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* API Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {[
            { label: 'API Calls/Month', value: '10M+', icon: '📊' },
            { label: 'Uptime', value: '99.9%', icon: '⚡' },
            { label: 'Avg Response Time', value: '150ms', icon: '🚀' },
            { label: 'Regions', value: '12', icon: '🌍' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start building?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get your API key and start integrating Knowlify into your application today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                Get API Key
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
