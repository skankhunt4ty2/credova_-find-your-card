import React from 'react';
import { SearchIcon } from './icons/Icons';

const Hero: React.FC = () => {
  return (
    <div className="relative text-center py-20 md:py-32 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                Find Your Perfect Card <span className="text-purple-400">Fast</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Search, compare, and apply for the best credit cards in India. All in one place.
            </p>
            
            <div className="w-full max-w-lg mb-8">
                <div className="relative">
                    <input 
                        type="text"
                        placeholder="Search by card name, bank, or feature (e.g., 'travel')"
                        className="w-full pl-12 pr-4 py-4 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                         <SearchIcon className="w-6 h-6 text-gray-500" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
                    Compare Cards
                </button>
                <button className="bg-gray-800/50 border border-gray-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
                    See Top Picks
                </button>
            </div>
        </div>
    </div>
  );
};

export default Hero;