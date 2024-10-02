"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { SparklesCore } from "../components/SparklesCore";

export const AboutHeroSection = () => {
 return (
  <section className="w-full flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8 mt-16 relative overflow-hidden">
   <SparklesCore
    id="tsparticles"
    background="transparent"
    minSize={0.3}
    maxSize={2}
    particleColor="#5EE2E7"
    particleDensity={50}
    speed={0.4}
    className="absolute inset-0 z-0"
   />
   <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white relative z-10"
   >
    Revolutionizing Ownership
   </motion.h1>
   <p className="text-2xl mb-8 text-white drop-shadow-md relative z-10">
    <TextGenerateEffect words="A unique community driven fractional ownership platform" />
   </p>
  </section>
 );
};
