"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChar((prev) => (prev + 1) % text.length);
    }, 2000); // Change character every 2 seconds

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`relative inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className={`absolute inset-0 ${index === currentChar ? 'text-primary' : 'text-foreground'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: index === currentChar ? 1 : 0.2,
            y: index === currentChar ? 0 : 10
          }}
          transition={{ duration: 0.5 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
