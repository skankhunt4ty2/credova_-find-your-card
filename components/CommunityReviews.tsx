
import React from 'react';
import { Review } from '../types';
import { StarIcon } from './icons/Icons';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full flex flex-col">
        <div className="flex space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} />
            ))}
        </div>
        <blockquote className="text-gray-300 flex-grow">"{review.quote}"</blockquote>
        <footer className="mt-4 text-sm font-semibold text-white">- {review.author}</footer>
    </div>
);

interface CommunityReviewsProps {
  reviews: Review[];
}

const CommunityReviews: React.FC<CommunityReviewsProps> = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default CommunityReviews;
