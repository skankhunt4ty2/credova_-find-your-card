
import React from 'react';
import { Offer } from '../types';

const LatestOffers: React.FC<{ offer: Offer }> = ({ offer }) => {
  const { title, description, cta, imageUrl } = offer;

  return (
    <section className="my-16">
      <div 
        className="relative rounded-2xl p-8 md:p-12 text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full"></div>
        <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full"></div>
        
        <div className="relative z-10 md:w-2/3">
          <h2 className="text-3xl font-bold tracking-tighter mb-3">{title}</h2>
          <p className="text-white/80 mb-6">{description}</p>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestOffers;
