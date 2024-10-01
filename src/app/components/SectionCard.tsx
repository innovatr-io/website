import React from 'react';

interface SectionCardProps {
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
  return (
    <div className="section-card relative rounded-3xl shadow-2xl overflow-hidden -mb-16 transform transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-cosmos-primary/30 via-cosmos-secondary/30 to-cosmos-accent/30"></div>
      <div className="absolute inset-0 bg-cosmos-background/80 backdrop-blur-sm"></div>
      <div className="relative z-10 p-8 overflow-x-auto">
        <div className="min-w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
