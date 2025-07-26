import React from 'react';
import { CreditCardData } from '../types';
import { StarIcon } from './icons/Icons';
import { Section } from './shared/Section';
import { Link } from './shared/Link';

const FeaturedCardItem: React.FC<{ card: CreditCardData }> = ({ card }) => (
  <div className="flex-shrink-0 w-80 h-96 rounded-2xl bg-gray-900 border border-gray-800 flex flex-col group relative overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300">
    {card.badge && (
      <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
        {card.badge}
      </div>
    )}
    
    {/* Card Art */}
    <div 
        className="h-48 rounded-t-2xl p-6 flex flex-col justify-end relative bg-cover bg-center"
        style={{ backgroundImage: `url(${card.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      <h3 className="text-xl font-bold text-white relative z-20">{card.name}</h3>
      <p className="text-sm text-white/80 relative z-20">{card.issuer}</p>
    </div>
    
    {/* Card Info */}
    <div className="p-6 flex flex-col flex-grow bg-gray-900/50">
      <div className="flex-grow">
        <p className="text-sm text-gray-400 mb-2">Key Benefit</p>
        <p className="text-white font-medium mb-4">{card.keyBenefit}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-1">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-semibold">{card.rating}</span>
          <span className="text-gray-500 text-sm">(5.0)</span>
        </div>
        <Link href={`#/card/${encodeURIComponent(card.name)}`} className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm">
          View Details
        </Link>
      </div>
    </div>
  </div>
);


const FeaturedCards: React.FC<{ cards: CreditCardData[] }> = ({ cards }) => {
  return (
    <Section title="Trending & Editor’s Picks" className="my-16">
        <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
                {cards.slice(0, 6).map((card) => ( // Show a limited number of featured cards
                    <FeaturedCardItem key={card.id} card={card} />
                ))}
            </div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-30"></div>
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-30"></div>
        </div>
    </Section>
  );
};

export default FeaturedCards;