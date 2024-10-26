"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { SparklesCore } from "../components/SparklesCore";

export const AboutHeroSection = () => {
 return (
  <section className="w-full flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8 mt-16 relative overflow-hidden">
   <div className="absolute inset-0 w-screen">
    <SparklesCore
     id="tsparticles"
     background="transparent"
     minSize={0.3}
     maxSize={2}
     particleColor="#5EE2E7"
     particleDensity={50}
     speed={0.4}
     className="w-full h-full"
    />
   </div>
   <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white relative z-10 glow-text"
   >
    Revolutionizing Ownership
   </motion.h1>
   <motion.p 
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-2xl mb-8 text-white drop-shadow-md relative z-10 glow-text"
   >
    <TextGenerateEffect words="A unique community driven fractional ownership platform" />
   </motion.p>
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
   >
    <button className="px-6 py-3 backdrop-blur-sm border bg-transparent border-[#5EE2E7] text-white text-center rounded-lg relative z-10 hover:bg-[#5EE2E7]/10 transition-all duration-200">
      <span className="text-lg">Launch App →</span>
    </button>
   </motion.div>
  </section>
 );
};
