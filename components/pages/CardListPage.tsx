import React, { useMemo } from 'react';
import { CreditCardData } from '../../types';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { CardGridItem } from '../shared/CardGridItem';
import { Link } from '../shared/Link';

interface CardListPageProps {
    allCards: CreditCardData[];
    filterType: string;
    filterValue: string;
}

const CardListPage: React.FC<CardListPageProps> = ({ allCards, filterType, filterValue }) => {
    const filteredCards = useMemo(() => {
        return allCards.filter(card => {
            if (filterType === 'category') {
                return card.category === filterValue;
            }
            if (filterType === 'issuer') {
                return card.issuer === filterValue;
            }
            if (filterType === 'tag') {
                return card.tags.includes(filterValue);
            }
            return false;
        });
    }, [allCards, filterType, filterValue]);

    const title = `${filterValue} Credit Cards`;
    
    const breadcrumbBase = filterType === 'issuer' ? 'Cards by Issuers' : filterType === 'category' ? 'Cards by Categories' : 'Cards by Offers';
    const breadcrumbBaseHref = `#/category-list/${encodeURIComponent(breadcrumbBase)}`;

    return (
         <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <Breadcrumbs crumbs={[
                { label: 'Home', href: '#' },
                { label: breadcrumbBase, href: breadcrumbBaseHref },
                { label: filterValue }
            ]} />

             <header 
                className="my-8 rounded-2xl p-8 md:p-12 text-white overflow-hidden bg-gray-900 border border-gray-800"
            >
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-3">{title}</h1>
                    <p className="text-white/80 max-w-2xl">
                        Showing {filteredCards.length} {filteredCards.length === 1 ? 'card' : 'cards'}. Browse and compare the best options available.
                    </p>
                </div>
            </header>

            {filteredCards.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards.map(card => (
                        <CardGridItem key={card.id} card={card} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-gray-900/50 rounded-2xl border border-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-600"><path d="M15 5H9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" /><path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" /></svg>
                    <h2 className="text-2xl font-bold text-white">No Cards Found</h2>
                    <p className="text-gray-400 mt-2">
                        We couldn't find any cards matching "{filterValue}".
                    </p>
                    <Link href="#" className="mt-6 inline-block bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors">
                        Back to Home
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CardListPage;