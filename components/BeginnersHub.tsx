
import React from 'react';
import { Guide } from '../types';
import { ArrowRightIcon } from './icons/Icons';
import { Link } from './shared/Link';

const GuideCard: React.FC<{ guide: Guide }> = ({ guide }) => (
    <Link href="#" className="block bg-gray-900/50 border border-gray-800 rounded-2xl p-6 group hover:border-purple-500/50 transition-colors duration-300">
        <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">{guide.title}</h3>
        <p className="text-sm text-gray-400 mt-2 mb-4">{guide.description}</p>
        <div className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
            Read Guide <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </div>
    </Link>
);

interface BeginnersHubProps {
  guides: Guide[];
}

const BeginnersHub: React.FC<BeginnersHubProps> = ({ guides }) => {
  return (
    <div className="space-y-4">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
};

export default BeginnersHub;
