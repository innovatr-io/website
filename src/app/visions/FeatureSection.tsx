import React from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FeatureSection: React.FC<{ features: Feature[] }> = ({
  features,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative p-6 bg-white rounded-lg shadow-md"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-t-lg" />
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
