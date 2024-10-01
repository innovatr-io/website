import React from 'react';
import { TextGenerateEffect } from './TextGenerateEffect';

interface FramedTextBoxProps {
  children: React.ReactNode;
  useTextGenerate?: boolean;
}

const FramedTextBox: React.FC<FramedTextBoxProps> = ({ children, useTextGenerate = false }) => (
  <div className="relative p-8 mb-12 overflow-hidden h-48 rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-r from-cosmos-primary via-cosmos-secondary to-cosmos-accent opacity-20 rounded-lg"></div>
    <div className="relative z-10 h-full overflow-y-auto">
      {useTextGenerate ? (
        <TextGenerateEffect words={children as string} />
      ) : (
        children
      )}
    </div>
    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-cosmos-accent animate-border-tl rounded-tl-lg"></div>
    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-cosmos-accent animate-border-br rounded-br-lg"></div>
  </div>
);

export default FramedTextBox;
