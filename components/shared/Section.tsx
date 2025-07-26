import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    action?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '', action }) => (
    <section className={className}>
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-white">{title}</h2>
            {action}
        </div>
        {children}
    </section>
);