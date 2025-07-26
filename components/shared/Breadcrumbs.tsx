import React from 'react';
import { Link } from './Link';

interface Crumb {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    crumbs: Crumb[];
}

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);


export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
                {crumbs.map((crumb, index) => (
                    <li key={`${crumb.label}-${index}`} className="flex items-center">
                        {crumb.href ? (
                            <Link href={crumb.href} className="text-gray-400 hover:text-white transition-colors">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="font-semibold text-white">{crumb.label}</span>
                        )}
                        
                        {index < crumbs.length - 1 && (
                            <ChevronRightIcon className="text-gray-600 mx-2" />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};