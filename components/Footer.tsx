
import React from 'react';
import { InstagramIcon, XIcon, YoutubeIcon } from './icons/Icons';
import { Link } from './shared/Link';

const Footer: React.FC = () => {
  const QuickLinks = [
    {label: 'Top Cards', href: '#/card-list/tag/Top%20Cards'},
    {label: 'Compare Cards', href: '#/compare'},
    {label: 'Card Reviews', href: '#/reviews'},
    {label: 'Beginner\'s Guides', href: '#/guides'},
    {label: 'FAQs', href: '#/faqs'},
    {label: 'About Us', href: '#/about'}
  ];

  return (
    <footer className="w-full bg-gray-900/50 border-t border-gray-800/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold tracking-wider text-white mb-4">CREDOVA</h3>
            <p className="text-gray-400 max-w-md">Your modern guide to navigating the world of credit cards. Find your perfect match with our smart tools and community insights.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QuickLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><XIcon className="w-6 h-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
            </div>
             <p className="text-sm text-gray-500 mt-6">
                All information is for representational purposes only. Always verify with the bank.
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-600 mt-12 border-t border-gray-800/50 pt-6">
          &copy; {new Date().getFullYear()} Credova Insights. All Rights Reserved. Design inspired by CRED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;