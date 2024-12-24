import React from 'react'

function Sidebar() {
  return (
    <div className="w-72 bg-black/70 backdrop-blur-lg p-6 flex flex-col fixed h-full shadow-xl border-r border-gray-800">
    <div className="flex items-center mb-12">
      <img
        src="/crypto-logo.png" 
        alt="Crypto Logo"
        className="h-12 w-12 mr-4 animate-pulse"
      />
      <h1 className="text-3xl font-semibold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">CryptoDash</h1>
    </div>
    <nav className="space-y-6">
      <a
        href="/"
        className="flex items-center p-3 rounded-lg hover:bg-cyan-500/20 transition-all text-gray-300"
      >
        Dashboard
      </a>
      <a
        href="/users"
        className="flex items-center p-3 rounded-lg hover:bg-cyan-500/20 transition-all text-gray-300"
      >
        User List 
      </a>
      <a
        href="#"
        className="flex items-center p-3 rounded-lg hover:bg-cyan-500/20 transition-all text-gray-300"
      >
        <span className="material-icons mr-3 text-purple-400">settings</span>
        Settings
      </a>
    </nav>
  </div>
  )
}

export default Sidebar