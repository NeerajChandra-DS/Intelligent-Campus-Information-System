import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sender } from '../types';
import type { Message } from '../types';
import { getChatbotResponse } from '../services/geminiService';
import { SendIcon } from './icons';

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-2">
      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
  </div>
);

const QuickReplyButton: React.FC<{ text: string, onReply: (text: string) => void }> = ({ text, onReply }) => (
    <button
        onClick={() => onReply(text)}
        className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors duration-200"
    >
        {text}
    </button>
);


export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm UniPal, your campus assistant. How can I help you today?", sender: Sender.Bot }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processMessage = useCallback(async (text: string) => {
      if (!text.trim()) return;

      const userMessage: Message = { text, sender: Sender.User };
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);

      const botResponseText = await getChatbotResponse(text);
      
      const botMessage: Message = { text: botResponseText, sender: Sender.Bot };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    processMessage(inputValue);
    setInputValue('');
  };

  const handleQuickReply = (text: string) => {
    processMessage(text);
  };

  return (
    <div className="w-full h-full bg-white md:rounded-2xl shadow-2xl flex flex-col font-sans">
      <header className="bg-indigo-600 text-white p-4 md:rounded-t-2xl">
        <h2 className="text-lg font-semibold">UniPal Assistant</h2>
      </header>
      
      <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === Sender.User ? 'justify-end' : 'justify-start'} mb-3`}>
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === Sender.User ? 'bg-indigo-500 text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
         {isLoading && (
            <div className="flex justify-start mb-3">
                 <div className="bg-slate-200 rounded-2xl rounded-bl-none p-2">
                    <TypingIndicator />
                 </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length <= 2 && !isLoading && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
            <QuickReplyButton text="What are the library hours?" onReply={handleQuickReply} />
            <QuickReplyButton text="When is the Career Fair?" onReply={handleQuickReply} />
            <QuickReplyButton text="What's for lunch at The Hub?" onReply={handleQuickReply} />
        </div>
      )}

      <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 bg-white md:rounded-b-2xl">
        <div className="flex items-center bg-slate-100 rounded-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full bg-transparent px-4 py-2 text-sm text-slate-800 focus:outline-none"
            disabled={isLoading}
          />
          <button type="submit" className="bg-indigo-500 text-white p-2 rounded-full m-1 hover:bg-indigo-600 disabled:bg-slate-300 transition-colors" disabled={isLoading || !inputValue}>
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};