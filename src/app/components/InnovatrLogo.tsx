import React from 'react';

const InnovatrLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="100"
      height="24"
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="0" y="20" fill="currentColor" fontSize="24" fontFamily="Lato, sans-serif">
        nnovatr
      </text>
      <circle cx="4" cy="4" r="3" fill="#006400" />
      <text x="8" y="20" fill="currentColor" fontSize="24" fontFamily="Lato, sans-serif">
        i
      </text>
    </svg>
  );
};

export default InnovatrLogo;
