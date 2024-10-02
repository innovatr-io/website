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
      <text x="0" y="20" fill="currentColor" fontSize="24" fontFamily="Gotham, sans-serif">
        innovatr
      </text>
      <rect x="3" y="0" width="4" height="4" fill="#006400" />
    </svg>
  );
};

export default InnovatrLogo;
