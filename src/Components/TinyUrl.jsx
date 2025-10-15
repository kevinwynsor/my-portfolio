import React, { useState, useCallback, useEffect } from 'react';
import { Link, Copy, CheckCircle, ExternalLink, Trash2, BarChart3, RefreshCw, AlertCircle } from 'lucide-react';
import axios from 'axios';

export default function URLShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [urls, setUrls] = useState([]);
  const [copiedId, setCopiedId] = useState(null);


  const DEF_HEADERS= {
    headers: {
    'Authorization': 'Bearer 9613e466a1c55d28ac51c497d61df00dbf9b1451',
    'Content-Type': 'application/json'
  }}

  const DEF_HEADERS2= {
    headers: {
    'Authorization': 'Bearer 9613e466a1c55d28ac51c497d61df00dbf9b1451'
  }}

  useEffect(() => {
    handleRefresh()
  }, []);

  const shortifyLink = useCallback(async () => {
    try{
      const respData = await axios.post(`https://api-ssl.bitly.com/v4/bitlinks`, {
        long_url: longUrl
      }, DEF_HEADERS);
      handleRefresh()
    }catch (e){
      console.log(e)
    }
  }, [longUrl]);

  const handleRefresh = useCallback(async () => {
    const respData = await axios.get('https://api-ssl.bitly.com/v4/groups/BpaceHVjVoi/bitlinks', {headers:{
      'Authorization': 'Bearer 9613e466a1c55d28ac51c497d61df00dbf9b1451',
    }});
    console.log(respData)
    respData.data.links.map((resp)=>{
      const date = new Date(resp.created_at)
      const newData = {link: resp.link, longUrl: resp.long_url, createdAt: date.toLocaleString(), clicks: 0}

      setUrls(prevItems => {
      const exists = prevItems.some(url => url.link === newData.link)
      if (!exists) {
        return [...prevItems, newData];
      }
      return prevItems
      })

    })
    
    const respData2 = await axios.get('https://api-ssl.bitly.com/v4/bitlinks/bit.ly/4hd3Oub/clicks?unit=month&units=1', {headers:{
      'Authorization': 'Bearer 9613e466a1c55d28ac51c497d61df00dbf9b1451',
    }});
  }, [longUrl]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLongUrl(value);
    setIsValid(/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(value));
  };


  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const deleteUrl = useCallback(async link => {
    try{
      setUrls(urls.filter(url => url.link !== link));
      const respData = await axios.delete(`https://api-ssl.bitly.com/v4/bitlinks/${link.slice(-14)}`, {
        long_url: longUrl
      }, DEF_HEADERS2);
      console.log(respData)
    }catch (e){
      console.log(e)
    }
  }, [longUrl]);

  const simulateClick = (link) => {
    console.log(link)
    setUrls(urls.map(url => 
      url.link === link ? { ...url, clicks: url.clicks + 1 } : url
    ));
    console.log(urls)
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 mt-8">
            <Link className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
            URL Shortener
          </h1>
          <p className="text-gray-300">Transform long URLs into short, shareable links</p>

          {/* Disclaimer */}
          <div className="mt-6 max-w-2xl mx-auto bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm text-yellow-200 font-medium mb-1">Demo Limitations</p>
                <p className="text-xs text-yellow-100/80">
                  This is a demonstration version. Due to Bitly's free tier restrictions, only 5 links can be created per month. 
                  Click tracking and delete functions are simulated for demo purposes only.
                </p>
              </div>
            </div>
          </div>
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
                onChange={handleChange}
                placeholder="https://example.com/very/long/url/path"
                className={`w-full px-4 py-3 bg-white/10  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 border p-2 ${isValid ? "border-white/30" : "border-red-500"}`}
              />
            </div>

            {!isValid && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                Please enter a valid url
              </div>
            )}

            <button
              onClick={shortifyLink}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Shorten URL
            </button>
          </div>
        </div>
      
        {/* URLs List */}
        {urls.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Your Shortened URLs
              </h2>
              <button
                onClick={handleRefresh}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 group"
                title="Refresh list"
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-sm font-medium">Refresh</span>
              </button>
            </div>
            
            {urls.map((url) => (
              <div
                key={url.link}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-bold">
                        {url.link}
                      </div>
                      <button
                        onClick={() => copyToClipboard(url.link, url.link)}
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
                        onClick={() => {simulateClick(url.link), window.open(url.link, '_blank')}}
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
                    onClick={() => deleteUrl(url.link)}
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