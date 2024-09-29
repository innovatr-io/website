"use client";

import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { GradientBanner } from "../components/GradientBanner";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import Link from "next/link";

const SolutionCard: React.FC<{
 title: string;
 subtitle: string;
 description: string;
 features: string[];
 icon: string;
}> = ({ title, subtitle, description, features, icon }) => {
 return (
  <motion.div
   className="bg-primary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
   whileHover={{ scale: 1.05 }}
   whileTap={{ scale: 0.95 }}
  >
   <div className="flex items-center mb-4">
    <span className="text-3xl mr-4 text-secondary-light">{icon}</span>
    <div>
     <h2 className="text-2xl font-semibold text-white">{title}</h2>
     <h3 className="text-lg font-medium text-background-light">{subtitle}</h3>
    </div>
   </div>
   <p className="mb-4 text-background-light">{description}</p>
   <ul className="list-disc list-inside text-background-light">
    {features.map((feature, index) => (
     <li key={index}>{feature}</li>
    ))}
   </ul>
  </motion.div>
 );
};

const AdvantageCard: React.FC<{
 title: string;
 description: string;
 icon: string;
}> = ({ title, description, icon }) => {
 return (
  <motion.div
   className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
   whileHover={{ scale: 1.05 }}
   whileTap={{ scale: 0.95 }}
  >
   <span className="text-4xl mb-4 block">{icon}</span>
   <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
   <p className="text-gray-300">{description}</p>
  </motion.div>
 );
};

export default function Solutions() {
 const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
 };

 return (
  <Layout>
   <GradientBanner className="h-[400px] mb-16">
    <motion.h1
     className="text-4xl font-bold mb-4 text-white text-center"
     initial={{ opacity: 0, y: -50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
    >
     Empowering Communities Through Innovative Solutions
    </motion.h1>
    <motion.div
     className="text-xl text-white text-center max-w-3xl mx-auto"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.8, delay: 0.2 }}
    >
     Innovatr is revolutionizing asset ownership and investment by leveraging
     blockchain technology to create inclusive, transparent, and
     community-driven solutions. We&apos;re breaking down barriers and opening up new
     possibilities for creators, investors, and enthusiasts alike.
    </motion.div>
   </GradientBanner>

   <div className="max-w-6xl mx-auto px-4 py-8">
    <motion.h2
     className="text-3xl font-bold mb-4 text-center"
     variants={fadeInUp}
     initial="initial"
     animate="animate"
     transition={{ duration: 0.6 }}
    >
     Our Innovative Solutions
    </motion.h2>
    <motion.p
     className="text-lg mb-8 text-center"
     variants={fadeInUp}
     initial="initial"
     animate="animate"
     transition={{ duration: 0.6 }}
    >
     Innovatr solves current challenges by leveraging the power of blockchain
     technology to democratize ownership and investment. Our platform allows
     anyone, anywhere, to own a fractional share of tokenized assets, breaking
     down traditional barriers and making ownership accessible to all.
    </motion.p>
    <motion.h3
     className="text-2xl font-semibold mb-6 text-center"
     variants={fadeInUp}
     initial="initial"
     animate="animate"
     transition={{ duration: 0.6 }}
    >
     Here&apos;s how we do it:
    </motion.h3>

    <motion.div
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
     variants={{
      hidden: { opacity: 0 },
      show: {
       opacity: 1,
       transition: {
        staggerChildren: 0.2,
       },
      },
     }}
     initial="hidden"
     animate="show"
    >
     <motion.div variants={fadeInUp}>
      <SolutionCard
       title="Tokenized Ownership"
       subtitle="Own a Piece of the Future"
       description="We tokenize high-value assets and intellectual property (IP), allowing them to be divided into smaller, more affordable shares."
       features={[
        "Fractional ownership of high-value assets",
        "Access to previously inaccessible investments",
        "Transparent and secure ownership records",
       ]}
       icon="🪙"
      />
     </motion.div>
     <motion.div variants={fadeInUp}>
      <SolutionCard
       title="Multichain Flexibility"
       subtitle="Choose Your Blockchain"
       description="Innovatr offers the flexibility to tokenize assets across multiple blockchains, including Solana, Ethereum, and Binance Smart Chain."
       features={[
        "Support for multiple blockchains",
        "Enhanced liquidity and security",
        "Integration with DeFi ecosystems",
       ]}
       icon="🔗"
      />
     </motion.div>
     <motion.div variants={fadeInUp}>
      <SolutionCard
       title="Empowering Creators"
       subtitle="Take Control of Your Work"
       description="For the first time, creators can tokenize their work and maintain control over it, engaging directly with their fans and supporters."
       features={[
        "Direct engagement with fans and supporters",
        "Tokenization of creative works",
        "New revenue streams for creators",
       ]}
       icon="🎨"
      />
     </motion.div>
     <motion.div variants={fadeInUp}>
      <SolutionCard
       title="Fractional Investment"
       subtitle="Invest in What You Believe In"
       description="Innovatr opens the door for individuals to invest small amounts in assets they believe in, lowering the financial barrier to entry."
       features={[
        "Low barrier to entry for investments",
        "Diversification opportunities",
        "Access to high-value asset investments",
       ]}
       icon="💼"
      />
     </motion.div>
     <motion.div variants={fadeInUp}>
      <SolutionCard
       title="Innovatr Token"
       subtitle="Powering Our Ecosystem"
       description="At the heart of our platform is the Innovatr token, issued on the Solana blockchain, providing various benefits to users."
       features={[
        "Reduced transaction fees",
        "Staking rewards",
        "Exclusive platform benefits",
       ]}
       icon="🔑"
      />
     </motion.div>
    </motion.div>

    <motion.h2
     className="text-3xl font-bold mb-8 text-center mt-16"
     {...fadeInUp}
    >
     Our Advantages
    </motion.h2>
    <motion.div
     className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
     variants={{
      hidden: { opacity: 0 },
      show: {
       opacity: 1,
       transition: {
        staggerChildren: 0.2,
       },
      },
     }}
     initial="hidden"
     animate="show"
    >
     <motion.div variants={fadeInUp}>
      <AdvantageCard
       title="Lower Fees"
       description="By using blockchain technology, we cut out unnecessary middlemen, which means lower fees for both creators and investors."
       icon="💰"
      />
     </motion.div>
     <motion.div variants={fadeInUp}>
      <AdvantageCard
       title="Decentralized & Transparent"
       description="All transactions are secured on the blockchain, ensuring transparency and trust between creators and their supporters."
       icon="🔒"
      />
     </motion.div>
     <motion.div variants={fadeInUp}>
      <AdvantageCard
       title="Inclusive Access"
       description="Innovatr makes it possible for everyone to participate in the future of ownership, from fans to investors looking for promising opportunities."
       icon="🌍"
      />
     </motion.div>
    </motion.div>

    <motion.div
     className="mt-16"
     initial={{ opacity: 0, y: 50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
    >
     <h2 className="text-3xl font-bold mb-6 text-center">
      A New Era of Ownership
     </h2>
     <p className="text-lg text-gray-300 mb-8">
      Innovatr offers a revolutionary solution to the traditional barriers that
      have limited access to ownership and investment. By combining the power of
      blockchain, multichain flexibility, and tokenized assets, we&apos;re
      creating a future where ownership is democratized, transparent, and
      accessible to everyone. Whether you&apos;re a creator looking to maintain
      control over your work or an investor eager to own a piece of the future,
      Innovatr is here to make it happen.
     </p>
    </motion.div>

    <motion.div className="text-center" {...fadeInUp}>
     <Link href="/" className="btn btn-primary">
      Back to Home
     </Link>
    </motion.div>
   </div>
  </Layout>
 );
}
