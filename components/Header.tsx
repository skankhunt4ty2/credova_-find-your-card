import React, { useState } from 'react';
import { MenuData } from '../types';
import { Link } from './shared/Link';

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

interface HeaderProps {
    menuData?: MenuData | null;
}

const Header: React.FC<HeaderProps> = ({ menuData }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  return (
    <header className="w-full p-4 md:px-8 flex items-center justify-between bg-black/60 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
      <Link href="#" className="flex items-center space-x-2">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-400"
        >
          <path d="M15 5H9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" />
          <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
        </svg>
        <span className="text-xl font-bold tracking-wider text-white">CREDOVA</span>
      </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {menuData?.map(item => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href={item.href} className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium px-3 py-2 rounded-md">
                <span>{item.title}</span>
                <ChevronDownIcon className={`transform transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : 'rotate-0'}`} />
              </Link>
              
              <div
                className={`
                  absolute top-full left-1/2 -translate-x-1/2 mt-2 ${item.columns === 2 ? 'w-96' : 'w-64'} origin-top
                  transition-all duration-200 ease-out
                  ${activeMenu === item.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
              >
                <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-lg shadow-2xl p-2">
                  <div className={`grid ${item.columns === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                    {item.links.map(link => (
                      <Link
                        href={link.href}
                        key={link.title}
                        onClick={() => setActiveMenu(null)}
                        className="block px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-purple-500/20 hover:text-white"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

       <div className="flex items-center space-x-4">
          <button className="bg-gray-800/50 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm">
            Sign In
          </button>
      </div>
    </header>
  );
};

export default Header;