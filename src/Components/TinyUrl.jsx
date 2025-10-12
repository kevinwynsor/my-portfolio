import React, { useState, useCallback } from 'react';
import { Link, Copy, CheckCircle, ExternalLink, Trash2, BarChart3 } from 'lucide-react';

export default function URLShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [urls, setUrls] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const [error, setError] = useState('');

  const shortifyLink = useCallback(async () => {
    const respData = await axios.post(`https://api-ssl.bitly.com/v4/bitlinks`, {
      long_url: longUrl,
    });
  }, [longUrl]);

  const generateShortCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleShorten = () => {
    setError('');
    
    if (!longUrl.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(longUrl)) {
      setError('Please enter a valid URL (include http:// or https://)');
      return;
    }

    const shortCode = customAlias.trim() || generateShortCode();
    
    // Check if custom alias already exists
    if (customAlias.trim() && urls.some(url => url.shortCode === shortCode)) {
      setError('This custom alias is already taken');
      return;
    }

    const newUrl = {
      id: Date.now(),
      longUrl: longUrl,
      shortCode: shortCode,
      shortUrl: `short.ly/${shortCode}`,
      clicks: 0,
      createdAt: new Date().toLocaleDateString()
    };

    setUrls([newUrl, ...urls]);
    setLongUrl('');
    setCustomAlias('');
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const deleteUrl = (id) => {
    setUrls(urls.filter(url => url.id !== id));
  };

  const simulateClick = (id) => {
    setUrls(urls.map(url => 
      url.id === id ? { ...url, clicks: url.clicks + 1 } : url
    ));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <Link className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
            URL Shortener
          </h1>
          <p className="text-gray-300">Transform long URLs into short, shareable links</p>
        </div>

        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Enter your long URL
              </label>
              <input
                type="text"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleShorten()}
                placeholder="https://example.com/very/long/url/path"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Custom alias (optional)
              </label>
              <div className="flex items-center">
                <span className="px-4 py-3 bg-white/5 border border-white/30 rounded-l-lg text-gray-300">
                  short.ly/
                </span>
                <input
                  type="text"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
                  placeholder="custom-name"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/30 border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleShorten}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Shorten URL
            </button>
          </div>
        </div>

        {/* URLs List */}
        {urls.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              Your Shortened URLs
            </h2>
            
            {urls.map((url) => (
              <div
                key={url.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-bold">
                        {url.shortUrl}
                      </div>
                      <button
                        onClick={() => copyToClipboard(url.shortUrl, url.id)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedId === url.id ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => simulateClick(url.id)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Open link (simulated)"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-300 truncate" title={url.longUrl}>
                      {url.longUrl}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteUrl(url.id)}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400 hover:text-red-300"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    {url.clicks} clicks
                  </span>
                  <span>Created: {url.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {urls.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Link className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No shortened URLs yet. Create your first one above!</p>
          </div>
        )}
      </div>
    </div>
  );
}