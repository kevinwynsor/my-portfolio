import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Blocks } from 'lucide-react';
import Home from './Components/Home'; 
import TinyUrl from './Components/TinyUrl'; 
import AISummarizer from './Components/AISummarizer';


function App() {
  return (
    <>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-6xl px-6 py-4 flex justify-start">
            {/* Logo */}
            <Link to="/">
                <Blocks className="w-6 h-6 text-white" />
            </Link>
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TinyUrl" element={<TinyUrl />} />
          <Route path="/AISummarizer" element={<AISummarizer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;