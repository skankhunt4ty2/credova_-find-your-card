import React from 'react';
import { Category } from '../types';
import { Section } from './shared/Section';
import { Link } from './shared/Link';

const CategoryTile: React.FC<{ category: Category }> = ({ category }) => {
    const Icon = category.icon;
    const href = `#/card-list/category/${encodeURIComponent(category.name)}`;
    return (
        <Link href={href} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:bg-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-4 bg-gray-800/70 p-4 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-white">{category.name}</h3>
        </Link>
    );
};

const CategoryTiles: React.FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <Section title="Browse by Category" className="my-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryTile key={category.name} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default CategoryTiles;