import React from 'react';

interface SectionCardProps {
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-12 transform transition-transform duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-cosmos-primary via-cosmos-secondary to-cosmos-accent opacity-10"></div>
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
