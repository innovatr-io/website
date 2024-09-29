import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, description, icon }) => {
  return (
    <motion.div
      className="bg-cosmos-primary/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-cosmos-accent/20"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(94, 226, 231, 0.3)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4 text-cosmos-accent">{icon}</span>
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <h3 className="text-lg font-medium text-cosmos-text-gray">{subtitle}</h3>
        </div>
      </div>
      <p className="mb-4 text-cosmos-text-light">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
