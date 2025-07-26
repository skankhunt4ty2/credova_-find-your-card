import React from 'react';
import { CreditCardData } from '../../types';
import { StarIcon } from '../icons/Icons';
import { Link } from './Link';

export const CardGridItem: React.FC<{ card: CreditCardData }> = ({ card }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl flex flex-col group relative overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300">
    {/* Card Art */}
    <Link href={`#/card/${encodeURIComponent(card.name)}`} className="block">
        <div 
            className="h-48 rounded-t-2xl p-6 flex flex-col justify-end relative bg-cover bg-center"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <h3 className="text-xl font-bold text-white relative z-20">{card.name}</h3>
            <p className="text-sm text-white/80 relative z-20">{card.issuer}</p>
        </div>
    </Link>
    
    {/* Card Info */}
    <div className="p-6 flex flex-col flex-grow bg-gray-900/50">
      <div className="flex-grow">
        <p className="text-sm text-gray-400 mb-2">Key Benefit</p>
        <p className="text-white font-medium mb-4">{card.keyBenefit}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-semibold">{card.rating}</span>
        </div>
        <Link href={`#/card/${encodeURIComponent(card.name)}`} className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm">
          View Details
        </Link>
      </div>
    </div>
  </div>
);
