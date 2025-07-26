
import React from 'react';
import { CreditCardData } from '../../types';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import CardFeatureDisplay from '../CardFeatureDisplay';
import { Link } from '../shared/Link';

interface CardDetailPageProps {
    card?: CreditCardData;
}

const CardDetailPage: React.FC<CardDetailPageProps> = ({ card }) => {
    if (!card) {
       return (
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
                <h1 className="text-3xl font-bold text-red-500">Card Not Found</h1>
                <p className="text-gray-400 mt-2">The card you are looking for does not exist.</p>
                <Link href="#" className="mt-4 inline-block text-purple-400 hover:text-purple-300">Go back to Home</Link>
            </div>
        );
    }
    
    const breadcrumbBase = card.category;
    const breadcrumbBaseHref = `#/card-list/category/${encodeURIComponent(breadcrumbBase)}`;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <Breadcrumbs crumbs={[
                { label: 'Home', href: '#' },
                { label: breadcrumbBase, href: breadcrumbBaseHref },
                { label: card.name }
            ]} />
            
            {/* Hero Section */}
            <div 
                className="mt-8 mb-8 h-64 md:h-80 rounded-2xl p-8 flex flex-col justify-end relative bg-cover bg-center"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 rounded-2xl"></div>
                <div className="relative z-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">{card.name}</h1>
                    <p className="text-xl text-white/80">{card.issuer}</p>
                </div>
            </div>

            <CardFeatureDisplay
                features={card.features}
            />
        </div>
    );
};

export default CardDetailPage;