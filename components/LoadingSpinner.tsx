
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div
        className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-white border-t-transparent"
      ></div>
      <p className="text-gray-400 text-sm">fetching insights...</p>
    </div>
  );
};

export default LoadingSpinner;
