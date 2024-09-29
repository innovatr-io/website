"use client";

import Link from "next/link";
import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";
import { TextGenerateEffect } from "./components/TextGenerateEffect";
import { motion } from "framer-motion";

export default function Home() {
 return (
  <Layout>
   <section className="w-full h-[600px]">
    <GradientBanner className="h-full">
     <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-5xl font-bold mb-8 text-white drop-shadow-lg"
     >
      Revolutionizing Ownership
     </motion.h1>
     <p className="text-2xl mb-8 text-white drop-shadow-md">
      <TextGenerateEffect words="A unique community driven fractional ownership platform" />
     </p>
     <div className="flex space-x-4">
      <Link href="/solutions" className="btn btn-primary btn-lg">
       Our Solutions
      </Link>
      <Link href="/visions" className="btn btn-secondary btn-lg">
       Our Visions
      </Link>
     </div>
    </GradientBanner>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Innovatr?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     <motion.div 
      className="bg-primary p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">Fractional Ownership</h3>
      <p className="text-background-light">
       Access high-value assets and IP through blockchain-enabled fractional ownership.
      </p>
     </motion.div>
     <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">Community Driven</h3>
      <p className="text-gray-300">
       Be part of a vibrant community shaping the future of ownership and investment.
      </p>
     </motion.div>
     <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">Blockchain Powered</h3>
      <p className="text-gray-300">
       Enjoy the security, transparency, and efficiency of blockchain technology.
      </p>
     </motion.div>
    </div>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
    <Link href="/about" className="btn btn-primary btn-lg">
     Learn More About Innovatr
    </Link>
   </section>
  </Layout>
 );
}
