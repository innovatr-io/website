"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import FramedTextBox from "../components/FramedTextBox";

export const SolutionsHeroSection = () => {
 return (
  <section className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
   >
    Empowering Communities Through Innovative Solutions
   </motion.h1>
   <div className="max-w-4xl mx-auto">
    <FramedTextBox useTextGenerate>
     Innovatr solves current challenges by leveraging the power of blockchain
     technology to democratize ownership and investment. Our platform allows
     anyone, anywhere, to own a fractional share of tokenized assets, breaking
     down traditional barriers and making ownership accessible to all.
    </FramedTextBox>
   </div>
  </section>
 );
};
