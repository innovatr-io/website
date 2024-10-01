"use client";

import { motion } from "framer-motion";

interface VisionSectionProps {
 title: string;
 content: string;
}

export const VisionsSectionComponent: React.FC<VisionSectionProps> = ({ title, content }) => {
 return (
  <motion.section 
   className="mb-8"
   initial={{ opacity: 0, y: 50 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
  >
   <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
   <p className="text-base">{content}</p>
  </motion.section>
 );
};
