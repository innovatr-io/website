"use client";

import Link from "next/link";
import Layout from "../components/Layout";
import { GradientBanner } from "../components/GradientBanner";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { Timeline } from "../components/Timeline";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const PieChart = dynamic(() => import("../components/PieChart"), { ssr: false });

export default function About() {
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
      About Innovatr
     </motion.h1>
     <p className="text-2xl mb-8 text-white drop-shadow-md">
      <TextGenerateEffect words="A unique community driven fractional ownership platform" />
     </p>
    </GradientBanner>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     <motion.div 
      className="bg-primary p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">
       Own a Piece of the Future
      </h3>
      <h4 className="text-lg font-medium mb-4 text-background-light">
       Tokenize. Invest. Empower.
      </h4>
      <p className="text-background-light">
       Innovatr is revolutionizing ownership and investment by leveraging
       blockchain technology to make high-value assets and intellectual property
       (IP) accessible to everyone. From music to art and beyond, Innovatr
       enables fractional ownership in a decentralized, transparent, and secure
       way.
      </p>
     </motion.div>
     <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">
       Fine Art & Digital Art
      </h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       Democratizing art investment
      </h4>
      <p className="text-gray-300">
       Through Innovatr, artists can tokenize both physical and digital
       artworks, offering investors the ability to own fractional shares of
       high-value pieces. This democratizes the art market, allowing collectors
       and fans to invest in art without the need for large upfront capital,
       while artists gain a new revenue stream.
      </p>
     </motion.div>
     <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">Music Industry</h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       Empower artists and fans
      </h4>
      <p className="text-gray-300">
       Innovatr empowers musicians and artists to tokenize their albums, songs,
       and royalties, giving fans the opportunity to invest in their favorite
       creators. By owning fractional shares of music assets, supporters can
       share in the financial success of their favorite artists, while creators
       retain greater control over their work.
      </p>
     </motion.div>
     <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
     >
      <h3 className="text-xl font-semibold mb-2 text-white">Real Estate</h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       Democratizing property investment
      </h4>
      <p className="text-gray-300">
       Innovatr allows property owners to tokenize real estate assets, enabling
       fractional ownership of commercial and residential properties. Investors
       can buy and trade shares in real estate projects, making property
       investment more accessible, while property owners can raise capital
       without selling entire properties.
      </p>
     </motion.div>
    </div>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Token Distribution</h2>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
     <div className="w-full md:w-1/2">
      <PieChart />
     </div>
     <div className="w-full md:w-1/2">
      <p className="mb-4">
       The VATR token allocation is designed to support long-term growth and
       community involvement.
      </p>
      <p className="mb-4">
       Team allocation ensures responsible project management, while the
       strategic reserve enables strategic partnerships and ecosystem
       development.
      </p>
      <p>
       A substantial portion is dedicated to staking and reward pools, fostering
       community participation and incentivizing engagement.
      </p>
      <ul className="mt-4 list-disc list-inside">
       <li>
        <span className="font-semibold">40%</span> - Public Sale
       </li>
       <li>
        <span className="font-semibold">25%</span> - Team & Advisors
       </li>
       <li>
        <span className="font-semibold">20%</span> - Platform Development
       </li>
       <li>
        <span className="font-semibold">15%</span> - Community Rewards
       </li>
      </ul>
     </div>
    </div>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Roadmap</h2>
    <Timeline />
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
     {['Partner1', 'Partner2', 'Partner3', 'Partner4'].map((partner, index) => (
      <div key={index} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md">
       <span className="text-xl font-semibold text-white">{partner}</span>
      </div>
     ))}
    </div>
   </section>
  </Layout>
 );
}
