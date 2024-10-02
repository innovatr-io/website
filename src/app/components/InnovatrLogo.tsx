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
        innovatr
      </text>
      <circle cx="5" cy="2" r="2" fill="#006400" />
    </svg>
  );
};

export default InnovatrLogo;
