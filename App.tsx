import React from 'react';
import { CornerOrnament, Divider } from './components/Ornament';
import { EmailForm } from './components/EmailForm';
import { SocialIcon, CupSoda } from './components/Icons';

function App() {
  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal-800 via-royal-900 to-[#0d0905]">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* Decorative Corners */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Navigation / Header */}
      <header className="relative z-10 w-full p-8 flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-2 group cursor-default">
           {/* Logo Icon Placeholder */}
           <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center bg-royal-800/50 backdrop-blur group-hover:border-gold-300 transition-colors">
              <CupSoda className="text-gold-300 w-5 h-5" />
           </div>
           <span className="font-display font-bold text-xl tracking-widest text-gold-200 uppercase">
             Chai Culture
           </span>
        </div>
        <div className="hidden md:block">
            <span className="px-4 py-1.5 rounded-full border border-gold-500/20 text-xs font-sans tracking-widest text-gold-300/80 bg-royal-800/30 backdrop-blur">
                COMING SOON
            </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 md:px-0 text-center max-w-4xl mx-auto pb-12">
        
        {/* Hero Section */}
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4">
             <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-gold-500/50"></div>
                <span className="text-gold-400 font-sans text-xs md:text-sm tracking-[0.3em] uppercase">Est. 2026</span>
                <div className="h-[1px] w-8 bg-gold-500/50"></div>
             </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-200 to-gold-500 mb-6 drop-shadow-sm leading-tight">
            Brew the <br className="hidden md:block" />
            <span className="italic font-normal">Royal Tradition</span>
          </h1>

          <p className="font-sans font-light text-stone-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 px-6">
            Experience the timeless elegance of authentic Indian chai. 
            Hand-selected spices, premium tea leaves, and a legacy of royal flavor in every sip.
          </p>

          <Divider />

          {/* CTA Section */}
          <div className="mt-8 mb-12">
            <h2 className="font-display text-gold-200 mb-6 text-sm md:text-base tracking-[0.2em] uppercase">
              Be the first to taste royalty
            </h2>
            <EmailForm />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full p-8 flex flex-col md:flex-row justify-between items-center gap-6 animate-fade-in border-t border-gold-500/10 bg-royal-900/50 backdrop-blur-sm">
        <div className="text-stone-500 text-xs font-sans tracking-wide">
          &copy; 2026 Chai Culture. All rights reserved.
        </div>

        <div className="flex gap-4">
          <SocialIcon type="instagram" href="#" />
          <SocialIcon type="twitter" href="#" />
          <SocialIcon type="facebook" href="#" />
        </div>
      </footer>
    </div>
  );
}

export default App;