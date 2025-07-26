import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const { navigate } = useNavigation();
  
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't intercept for new tabs (meta/ctrl-key) or middle-click
    if (event.metaKey || event.ctrlKey || event.button === 1) {
      return;
    }
    
    // If an onClick prop is passed, call it first.
    if (onClick) {
        onClick(event);
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};