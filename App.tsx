import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Chatbot } from './components/Chatbot';
import { ChatIcon, CloseIcon, UniversityIcon } from './components/icons';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
             <UniversityIcon />
            <h1 className="text-xl font-bold text-slate-800">Malla Reddy University</h1>
          </div>
          <p className="hidden md:block text-slate-500 text-sm">Your Intelligent Campus Assistant</p>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Dashboard />
      </main>

      {/* Chatbot Container - Handles responsive display */}
      <div
        className={`fixed inset-0 z-50 md:bottom-5 md:right-5 md:inset-auto transition-all duration-300 ease-in-out ${
          isChatOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop for mobile */}
        <div 
          className="absolute inset-0 bg-black/30 md:hidden"
          onClick={() => setIsChatOpen(false)}
        ></div>
        
        {/* Chatbot Window */}
        <div className={`
          absolute bottom-0 right-0 md:relative 
          w-full h-[85vh] md:w-96 md:h-[32rem] 
          transform transition-transform duration-300 ease-in-out
          ${isChatOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-10'}
        `}>
          <Chatbot />
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed z-50 bottom-5 right-5 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-110"
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
};

export default App;