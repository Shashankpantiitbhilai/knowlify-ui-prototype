'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Play, Download, Share2, Settings, Volume2, Palette } from 'lucide-react';

export function Demo() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [voiceType, setVoiceType] = useState('professional-female');
  const [speed, setSpeed] = useState(1);
  const [style, setStyle] = useState('khan');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsComplete(false);
    }
  };

  const handleGenerate = () => {
    if (!uploadedFile) return;
    
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
    }, 3000);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See It In{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your content and watch it transform into an engaging educational video
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload and Customization Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Upload Area */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Upload className="h-5 w-5 text-blue-600" />
                <span>Upload Your Content</span>
              </h3>
              
              <div 
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  uploadedFile 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.txt,.md,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {uploadedFile ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-green-800 font-medium">{uploadedFile.name}</p>
                    <p className="text-sm text-green-600">Ready to generate!</p>
                  </motion.div>
                ) : (
                  <div className="space-y-3">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                    <p className="text-gray-600 font-medium">Drop your files here</p>
                    <p className="text-sm text-gray-500">Or click to browse</p>
                    <div className="flex justify-center space-x-2 pt-2">
                      {['PDF', 'TXT', 'MD', 'DOCX'].map((format) => (
                        <span key={format} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Customization Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Settings className="h-5 w-5 text-purple-600" />
                <span>Customize Your Video</span>
              </h3>
              
              <div className="space-y-6">
                {/* Voice Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                    <Volume2 className="h-4 w-4" />
                    <span>Voice Type</span>
                  </label>
                  <select 
                    value={voiceType}
                    onChange={(e) => setVoiceType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="professional-male">Professional Male</option>
                    <option value="professional-female">Professional Female</option>
                    <option value="casual-male">Casual Male</option>
                    <option value="casual-female">Casual Female</option>
                  </select>
                </div>

                {/* Speaking Speed */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speaking Speed: {speed}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Video Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center space-x-2">
                    <Palette className="h-4 w-4" />
                    <span>Video Style</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'khan', name: 'Khan Academy', color: 'bg-blue-500' },
                      { id: 'modern', name: 'Modern', color: 'bg-purple-500' },
                      { id: 'minimal', name: 'Minimal', color: 'bg-gray-500' }
                    ].map((styleOption) => (
                      <button
                        key={styleOption.id}
                        onClick={() => setStyle(styleOption.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          style === styleOption.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-full h-8 ${styleOption.color} rounded mb-2`}></div>
                        <span className="text-xs text-gray-600">{styleOption.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            {!isGenerating && !isComplete && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Generate</h3>
                <p className="text-gray-600 mb-6">Upload a file to start creating your educational video</p>
                <button
                  onClick={handleGenerate}
                  disabled={!uploadedFile}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    uploadedFile
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Play className="h-5 w-5" />
                    <span>Generate Video</span>
                  </span>
                </button>
              </div>
            )}

            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Generating Video...</h3>
                <p className="text-gray-600">AI is processing your content</p>
                <div className="mt-4 bg-gray-200 rounded-full h-2 max-w-xs mx-auto">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            )}

            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Video Player */}
                <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-all">
                      <Play className="h-6 w-6 text-blue-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-sm">
                      Educational Video • 1080p HD • AI Generated
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900">Your Educational Video</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Generated in 12.3s</span>
                    </span>
                    <span>•</span>
                    <span>1080p HD</span>
                    <span>•</span>
                    <span>AI Voiceover</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
