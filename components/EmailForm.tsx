import React, { useState } from 'react';
import { Mail, ArrowRight } from './Icons';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto relative z-10">
      {status === 'success' ? (
        <div className="bg-gold-500/10 border border-gold-300/30 rounded-lg p-6 text-center animate-fade-in backdrop-blur-sm">
          <div className="w-12 h-12 bg-gold-300/20 rounded-full flex items-center justify-center mx-auto mb-3">
             <Mail className="text-gold-300" size={24} />
          </div>
          <h3 className="font-serif text-xl text-gold-200 mb-2">You are on the list</h3>
          <p className="text-gold-100/80 font-sans font-light">
            Thank you for joining our royal circle. We will notify you the moment our kettles are warm.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 text-xs uppercase tracking-widest text-gold-300 hover:text-white transition-colors"
          >
            Register another email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative group">
          <div className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-royal-800/50 backdrop-blur-md border border-gold-500/30 text-gold-100 placeholder-gold-500/40 px-6 py-4 pr-16 rounded-full focus:outline-none focus:border-gold-300 focus:ring-1 focus:ring-gold-300/50 transition-all font-sans font-light tracking-wide shadow-lg"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold-300 hover:bg-gold-200 rounded-full flex items-center justify-center text-royal-900 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
            >
              {status === 'loading' ? (
                <div className="w-4 h-4 border-2 border-royal-900 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <ArrowRight size={18} />
              )}
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gold-100/40 font-light font-sans tracking-wide">
            Join 2,000+ others awaiting the launch.
          </p>
        </form>
      )}
    </div>
  );
};