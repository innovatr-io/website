"use client";

import { motion } from "framer-motion";

export const AboutMissionSection = () => {
 return (
  <section className="w-full py-16 bg-cosmos-bg-dark">
   <div className="container mx-auto px-4">
    <motion.h2
     initial={{ opacity: 0, y: -30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     className="text-4xl font-bold mb-8 text-cosmos-text-light text-center"
    >
     Our Mission
    </motion.h2>
    <motion.p
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
     className="text-xl text-cosmos-text-light text-center max-w-3xl mx-auto"
    >
     At Innovatr, we're committed to democratizing access to high-value assets
     and intellectual property through blockchain technology. Our platform
     empowers individuals to participate in ownership opportunities previously
     reserved for the few.
    </motion.p>
   </div>
  </section>
 );
};
