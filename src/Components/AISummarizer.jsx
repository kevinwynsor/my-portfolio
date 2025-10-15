import React, { useState, useCallback } from 'react';
import { FileText, Sparkles, Copy, CheckCircle, RotateCcw, Zap } from 'lucide-react';

export default function AISummarizer() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setWordCount(countWords(text));
  };

  const simulateSummary = (text, length) => {
    if (!text.trim()) return '';

    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let targetSentences;

    switch(length) {
      case 'short':
        targetSentences = Math.max(1, Math.ceil(sentences.length * 0.2));
        break;
      case 'medium':
        targetSentences = Math.max(2, Math.ceil(sentences.length * 0.4));
        break;
      case 'long':
        targetSentences = Math.max(3, Math.ceil(sentences.length * 0.6));
        break;
      default:
        targetSentences = Math.ceil(sentences.length * 0.4);
    }

    // Select evenly distributed sentences
    const step = Math.floor(sentences.length / targetSentences);
    const selectedSentences = [];
    
    for (let i = 0; i < targetSentences && i * step < sentences.length; i++) {
      selectedSentences.push(sentences[i * step].trim());
    }

    return selectedSentences.join(' ');
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      alert('Please enter some text to summarize');
      return;
    }

    setIsLoading(true);
    setSummary('');

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const generatedSummary = simulateSummary(inputText, summaryLength);
    setSummary(generatedSummary);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setInputText('');
    setSummary('');
    setWordCount(0);
  };

  const exampleText = "Artificial intelligence (AI) is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of intelligent agents: any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals. Colloquially, the term artificial intelligence is often used to describe machines that mimic cognitive functions that humans associate with the human mind, such as learning and problem solving. As machines become increasingly capable, tasks considered to require intelligence are often removed from the definition of AI, a phenomenon known as the AI effect. A quip in Tesler's Theorem says AI is whatever hasn't been done yet. For instance, optical character recognition is frequently excluded from things considered to be AI, having become a routine technology.";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 animate-pulse">
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-blue-200">
            AI Text Summarizer
          </h1>
          <p className="text-gray-300">Transform lengthy text into concise, meaningful summaries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Input Text
              </h2>
              <span className="text-sm text-gray-300">{wordCount} words</span>
            </div>

            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder="Paste your text here to summarize..."
              className="w-full h-64 px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 resize-none"
            />

            <button
              onClick={() => setInputText(exampleText)}
              className="mt-3 text-sm text-cyan-300 hover:text-cyan-200 underline"
            >
              Load example text
            </button>

            {/* Summary Length Selection */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-3 text-gray-200">
                Summary Length
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'short', label: 'Short', desc: '~20%' },
                  { value: 'medium', label: 'Medium', desc: '~40%' },
                  { value: 'long', label: 'Long', desc: '~60%' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSummaryLength(option.value)}
                    className={`p-3 rounded-lg border transition-all ${
                      summaryLength === option.value
                        ? 'bg-cyan-500/30 border-cyan-400 text-white'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-xs opacity-75">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSummarize}
                disabled={isLoading || !inputText.trim()}
                className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Summarize
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                Summary
              </h2>
              {summary && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="h-64 px-4 py-3 bg-white/5 border border-white/20 rounded-lg overflow-y-auto">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4" />
                  <p>Analyzing your text...</p>
                </div>
              ) : summary ? (
                <p className="text-gray-100 leading-relaxed">{summary}</p>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <Sparkles className="w-12 h-12 mb-4 opacity-50" />
                  <p>Your summary will appear here</p>
                </div>
              )}
            </div>

            {summary && (
              <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Original: {wordCount} words</span>
                  <span className="text-gray-300">Summary: {countWords(summary)} words</span>
                  <span className="text-cyan-300 font-semibold">
                    {Math.round((countWords(summary) / wordCount) * 100)}% reduction
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Zap className="w-10 h-10 mb-3 text-cyan-400" />
            <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-300 text-sm">Get instant summaries of your text in seconds</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <FileText className="w-10 h-10 mb-3 text-blue-400" />
            <h3 className="text-lg font-bold mb-2">Smart Analysis</h3>
            <p className="text-gray-300 text-sm">Intelligently extracts key information and main points</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Sparkles className="w-10 h-10 mb-3 text-yellow-400" />
            <h3 className="text-lg font-bold mb-2">Customizable Length</h3>
            <p className="text-gray-300 text-sm">Choose the perfect summary length for your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}