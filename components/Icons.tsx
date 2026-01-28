import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, ArrowRight, CupSoda } from 'lucide-react';

export const SocialIcon = ({ type, href }: { type: 'instagram' | 'twitter' | 'linkedin' | 'facebook'; href: string }) => {
  const iconMap = {
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
    facebook: Facebook,
  };
  const Icon = iconMap[type];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-gold-300/20 hover:border-gold-300 hover:bg-gold-300/10 text-gold-200 hover:text-gold-300 transition-all duration-300 transform hover:scale-110 group"
    >
      <Icon size={20} className="group-hover:stroke-[2.5px]" />
    </a>
  );
};

export { Mail, ArrowRight, CupSoda };