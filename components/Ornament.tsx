import React from 'react';

export const CornerOrnament = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <div className={`absolute ${position === 'top-left' ? 'top-0 left-0' : 
                     position === 'top-right' ? 'top-0 right-0' : 
                     position === 'bottom-right' ? 'bottom-0 right-0' : 
                     'bottom-0 left-0'} pointer-events-none z-0 opacity-20 w-32 h-32 md:w-48 md:h-48`}>
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full fill-gold-300 ${rotation[position]}`}
      >
        <path d="M0,0 v100 q0,-50 50,-50 t50,-50 z" />
        <path d="M10,10 v40 q0,-20 20,-20 t20,-20 z" className="fill-gold-400 opacity-50"/>
      </svg>
    </div>
  );
};

export const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-8 opacity-60">
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-300"></div>
    <div className="rotate-45 w-2 h-2 border border-gold-300 bg-royal-800"></div>
    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-300"></div>
  </div>
);