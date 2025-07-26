
import React from 'react';

interface FeatureSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, icon, children, className = '' }) => {
  return (
    <section className={className}>
      <div className="flex items-center mb-6">
        <div className="text-white/80 mr-4 bg-gray-800/50 p-2 rounded-full">{icon}</div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-white">{title}</h3>
      </div>
      <div className="pl-2 md:pl-16 text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default FeatureSection;
