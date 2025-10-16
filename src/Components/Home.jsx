import { useState } from 'react';
import { ExternalLink, Code, Blocks, FileText, Coins, Database, PiggyBank, CloudUploadIcon, LinkIcon, Scissors, Sparkles, Linkedin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Rwards',
      icon: <Blocks className="w-6 h-6" />,
      tagline: 'NFT-Powered Rewards System',
      description: 'A rewards system that utilizes NFTs as coupons and loyalty points that can be scanned in stores.',
      role: 'Fixed and created features for both frontend and backend',
      tech: ['React', 'Node.js', 'Cosmos DB', 'Azure Functions', 'NFTs'],
      highlights: [
        'Used and learned Microsoft cloud technology',
        'Improved Web3 NFT functionality',
        'Delivered frontend and backend solutions'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Likha',
      icon: <Coins className="w-6 h-6" />,
      tagline: 'NFT Marketplace',
      link: 'https://likhanft.io/',
      description: 'An NFT marketplace used by people to buy and sell NFTs.',
      role: 'Full-stack development with Web3 integration',
      tech: ['React', 'Tailwindcss', 'Cosmos DB', 'Node.js', 'Azure Functions', 'Smart Contracts', 'Hardhat.js'],
      highlights: [
        'Deepened Web3 expertise through various exposure'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Aqucert',
      icon: <FileText className="w-6 h-6" />,
      tagline: 'NFT Certificate Distribution',
      description: 'Utilizes Likha technology to distribute NFT certificates.',
      role: 'Forked and adapted Likha repositories and smart contracts',
      tech: ['React', 'Tailwindcss', 'Cosmos DB', 'Node.js', 'Azure Functions', 'Smart Contracts', 'Hardhat.js'],
      highlights: [
        'Forked Likha code repositories',
        'Adapted smart contracts for certificate use case',
        'Certificate issuance on blockchain'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'DBM',
      icon: <Database className="w-6 h-6" />,
      tagline: 'Immutable Digital Ledger System',
      description: `The country's first blockchain backed budget transparency platform`,
      role: 'Dashboard development and smart contract modification',
      tech: ['Azure Functions','Cosmos DB', 'Hardhat.js', 'Blockchain', 'Data Visualization'],
      highlights: [
        'Created dashboard statistics',
        'Modified smart contracts for document mintings',
        'Implemented on-chain data storage',
        'Implemented data filtering for budget documents'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Asseto',
      icon: <Code className="w-6 h-6" />,
      tagline: 'Liquidity Pool',
      description: 'Partnership with UnderGround Labs to create a swap (liquidity pool) with USDC and company token.',
      role: 'Smart contract development and frontend architecture',
      tech: ['React', 'Hardhat.js', 'Uniswap', 'ERC20'],
      highlights: [
        'Created liquidity pool smart contract',
        'Built frontend structure for visualization',
        'Implemented token swap functionality'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto animate-pulse">
                <Blocks className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              KEVIN WYNSOR KONG
            </h1>
            <h1 className="md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Web3 Full-Stack Developer, and Banking Developer
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Full-stack developer that has knowledge in blockchain technology, NFTs, and decentralized applications
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["Full Stack Web3 Developer", "Mainframe Developer", "Cloud Developer"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

          {/* About Me Section */}
          <div className="mx-auto  invisible">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ut excepturi nobis in ipsa. Recusandae quaerat, magnam consectetur dolor ducimus voluptatem obcaecati pariatur tempore aspernatur dolores quod reprehenderit? In, tenetur.</p>
          </div>

            {/* About Me Section */}
        <div className="max-w-6xl mx-auto px-6 py-18">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Kevin, a passionate full-stack developer with expertise in JCL mainframe systems and modern web technologies. I specialize in building end-to-end web applications and exploring blockchain and Web3 solutions. Driven by curiosity and continuous learning, I thrive on tackling complex problems, integrating APIs, optimizing performance, and adapting to new tech stacks to deliver high-quality, forward-thinking solutions.
              </p>
            </div>
          </div>
        </div>

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30">
            <Blocks className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="text-gray-300 text-sm">Html, MUI, Tailwind, Ant Design, ChakraUI, React, Typescript, Vue</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/30">
            <Code className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p className="text-gray-300 text-sm">Node.js, Express.js, Blockchain/Web3 integrations</p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-700/30">
            <CloudUploadIcon className="w-12 h-12 mb-4 text-pink-400" />
            <h3 className="text-xl font-bold mb-2">Cloud Development</h3>
            <p className="text-gray-300 text-sm">Azure Functions, Cosmos DB, Azure Resources, Azure Storage</p>
          </div>
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-6 border border-red-700/30">
            <PiggyBank className="w-12 h-12 mb-4 text-red-400" />
            <h3 className="text-xl font-bold mb-2">Mainframe Development</h3>
            <p className="text-gray-300 text-sm">JCL, Cobol, SDSF</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-700/30">
            <LinkIcon className="w-12 h-12 mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Block Chain Development</h3>
            <p className="text-gray-300 text-sm">Hardhat.js, ERC20, ERC721, Web3 Integration to React and Azure Functions, Solidity</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                  {project.icon}
                </div>
                {project.link && ( 
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-blue-400 text-sm font-medium mb-3">{project.tagline}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ${activeProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 border-t border-gray-700 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">MY ROLE</h4>
                    <p className="text-sm text-gray-300">{project.role}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">KEY HIGHLIGHTS</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                {activeProject === project.id ? 'Click to collapse' : 'Click to expand'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div className="max-w-6xl mx-auto px-6 py-16" id="personal">
        <h2 className="text-3xl font-bold mb-12 text-center">Personal Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* URL Shortener Project */}
          <Link
            to="/TinyUrl"
            className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <Scissors className="w-6 h-6" />
              </div>
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">URL Shortener</h3>
            <p className="text-purple-400 text-sm font-medium mb-3">Link Management Tool</p>
            <p className="text-gray-300 mb-4">
              A beautiful URL shortening application (powered by Bit.ly) with custom aliases, click tracking, and an intuitive interface.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-700/50 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-indigo-700/50 rounded-full text-xs">Tailwind CSS</span>
              <span className="px-3 py-1 bg-indigo-700/50 rounded-full text-xs">JavaScript</span>
              <span className="px-3 py-1 bg-indigo-700/50 rounded-full text-xs">API Integration</span>
              <span className="px-3 py-1 bg-indigo-700/50 rounded-full text-xs">Bitly API</span>
            </div>
          </Link>

           {/* AI Summarizer Project */}
          <Link
            to="/AISummarizer"
            className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">AI Summarizer</h3>
            <p className="text-cyan-400 text-sm font-medium mb-3">Text Analysis Tool</p>
            <p className="text-gray-300 mb-4">
              Transform lengthy text into concise summaries with customizable length options and smart analysis (powered by Gemini AI).
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-700/50 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-cyan-700/50 rounded-full text-xs">AI/ML</span>
              <span className="px-3 py-1 bg-cyan-700/50 rounded-full text-xs">AI/API Integration</span>
              <span className="px-3 py-1 bg-cyan-700/50 rounded-full text-xs">Gemini API</span>
            </div>
          </Link>

          {/* Placeholder for more projects */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 border-dashed flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Code className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">More projects coming soon...</p>
            </div>
          </div>
        </div>
      </div>

            {/* Connect With Me Section */}
            <div className="max-w-6xl mx-auto px-6 py-16" id="contact">
        <h2 className="text-3xl font-bold mb-12 text-center">Connect With Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
              <p className="text-gray-300">Feel free to reach out for collaborations or just a friendly chat</p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:kevinwynsor@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/15 rounded-xl transition-all duration-200 group border border-white/10 hover:border-blue-400/50"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-sm md:text-base text-white font-medium">kevinwynsor@gmail.com</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kevin-wynsor-kong-048741236/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/15 rounded-xl transition-all duration-200 group border border-white/10 hover:border-blue-500/50"
              >
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                  <p className="text-white font-medium">linkedin.com/in/kevin-wynsor-kong</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              {/* Phone */}
              <div
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/15 rounded-xl transition-all duration-200 group border border-white/10 hover:border-green-400/50"
              >
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-medium">+63 (908) 422-2891</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-16 flex">
        <div className="max-w-6xl mx-auto px-6 py-2 text-center text-gray-400 text-sm">
          <p>Email: kevinwynsor@gmail.com</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-2 text-center text-gray-400 text-sm">
          <p>Contact Number: 09084222891</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-2 text-center text-gray-400 text-sm">
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kevin-wynsor-kong-048741236/">here</a></p>
        </div>
      </div>
    </div>
      );
    }
