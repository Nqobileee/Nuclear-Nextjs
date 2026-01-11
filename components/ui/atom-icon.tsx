import React from 'react';

interface AtomIconProps {
  className?: string;
  size?: number;
}

export function AtomIcon({ className = '', size = 24 }: AtomIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central nucleus */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      
      {/* Electron orbits */}
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-60 12 12)"
      />
      
      {/* Electrons */}
      <circle cx="22" cy="12" r="1.5" fill="currentColor" />
      <circle cx="6.5" cy="3.4" r="1.5" fill="currentColor" />
      <circle cx="6.5" cy="20.6" r="1.5" fill="currentColor" />
    </svg>
  );
}
