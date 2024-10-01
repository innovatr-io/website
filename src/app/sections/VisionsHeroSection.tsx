"use client";

import { motion } from "framer-motion";
import FramedTextBox from "../components/FramedTextBox";

export const VisionsHeroSection = () => {
 return (
  <section className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <motion.h1
    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
   >
    Our Vision: A Future Where Ownership is for Everyone
   </motion.h1>
   <div className="max-w-4xl mx-auto">
    <FramedTextBox useTextGenerate>
     At Innovatr, we believe that ownership shouldn&apos;t be exclusive.
     We&apos;re building a platform where creators and investors unite to
     unlock the full potential of tokenized assets and intellectual property.
    </FramedTextBox>
   </div>
  </section>
 );
};
