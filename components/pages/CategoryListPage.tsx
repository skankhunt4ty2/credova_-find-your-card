
import React, { useMemo } from 'react';
import { MenuData, CreditCardData } from '../../types';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Link } from '../shared/Link';
import { ArrowRightIcon } from '../icons/Icons';

interface CategoryListPageProps {
    menuData: MenuData;
    categoryTitle: string;
    allCards: CreditCardData[];
}

const CategoryListPage: React.FC<CategoryListPageProps> = ({ menuData, categoryTitle, allCards }) => {
    const category = menuData.find(item => item.title === categoryTitle);

    const getCardCount = useMemo(() => (href: string): number => {
        try {
            const parts = href.split('/').filter(p => p && p !== '#');
            if (parts.length < 3 || parts[0] !== 'card-list') {
                return 0;
            }
            const filterType = parts[1];
            const filterValue = decodeURIComponent(parts[2]);

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
            }).length;
        } catch (e) {
            console.error(`Failed to get card count for malformed href: ${href}`, e);
            return 0;
        }
    }, [allCards]);

    if (!category) {
        return (
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
                <h1 className="text-3xl font-bold text-red-500">Category Not Found</h1>
                <p className="text-gray-400 mt-2">The category "{categoryTitle}" does not exist.</p>
                <Link href="#" className="mt-4 inline-block text-purple-400 hover:text-purple-300">Go back to Home</Link>
            </div>
        );
    }
    
    // Tailwind doesn't support dynamic class names. We need to create a map for colors.
    const colorMap: { [key: string]: { text: string; bg: string; border: string } } = {
        green: { text: 'text-green-400', bg: 'bg-green-500/10', border: 'hover:border-green-500/50' },
        blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/50' },
        pink: { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'hover:border-pink-500/50' },
        orange: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'hover:border-orange-500/50' },
        red: { text: 'text-red-400', bg: 'bg-red-500/10', border: 'hover:border-red-500/50' },
        indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/50' },
        slate: { text: 'text-slate-400', bg: 'bg-slate-500/10', border: 'hover:border-slate-500/50' },
        amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'hover:border-amber-500/50' },
        teal: { text: 'text-teal-400', bg: 'bg-teal-500/10', border: 'hover:border-teal-500/50' },
        rose: { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/50' },
        cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/50' },
        lime: { text: 'text-lime-400', bg: 'bg-lime-500/10', border: 'hover:border-lime-500/50' },
        violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'hover:border-violet-500/50' },
        emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/50' },
        sky: { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'hover:border-sky-500/50' },
        fuchsia: { text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'hover:border-fuchsia-500/50' },
        default: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'hover:border-purple-500/50' },
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <Breadcrumbs crumbs={[{ label: 'Home', href: '#' }, { label: category.title }]} />
            <header className="my-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                    {category.title}
                </h1>
                <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
                    Find the perfect card for your needs. Explore our curated selections below.
                </p>
            </header>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                {category.links.map(link => {
                    const Icon = link.icon;
                    const cardCount = getCardCount(link.href);
                    const colors = colorMap[link.color || 'default'] || colorMap.default;

                    return (
                        <Link 
                            href={link.href} 
                            key={link.title}
                            className={`flex flex-col p-6 bg-gray-900/70 border border-gray-800 rounded-2xl group hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 ${colors.border}`}
                        >
                            <div className="flex-grow">
                                {Icon && (
                                <div className={`mb-4 ${colors.bg} p-3 rounded-full inline-block`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                )}
                                <h2 className="font-semibold text-xl text-white">{link.title}</h2>
                                {link.description && <p className="text-gray-400 text-sm mt-1 mb-4 min-h-[40px]">{link.description}</p>}
                            </div>
                            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                                {cardCount > 0 ? (
                                    <span className="text-xs font-medium text-gray-300 bg-gray-800 px-2 py-1 rounded-full">
                                        {cardCount} {cardCount === 1 ? 'card' : 'cards'}
                                    </span>
                                ) : (
                                    <span className="text-xs font-medium text-gray-600">
                                        Coming soon
                                    </span>
                                )}
                                <ArrowRightIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default CategoryListPage;
