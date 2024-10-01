"use client";

import { motion } from "framer-motion";
import {
 RocketIcon,
 ChainIcon,
 CreatorIcon,
 InvestmentIcon,
 KeyIcon,
} from "../components/Icons";

const SolutionCard: React.FC<{
 title: string;
 subtitle: string;
 description: string;
 features: string[];
 icon: React.ReactNode;
}> = ({ title, subtitle, description, features, icon }) => {
 return (
  <motion.div
   className="bg-cosmos-primary/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-cosmos-accent/20"
   whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(94, 226, 231, 0.3)" }}
   whileTap={{ scale: 0.95 }}
  >
   <div className="flex items-center mb-4">
    <div className="w-12 h-12 mr-4 text-cosmos-accent">{icon}</div>
    <div>
     <h2 className="text-2xl font-semibold text-white">{title}</h2>
     <h3 className="text-lg font-medium text-cosmos-text-gray">{subtitle}</h3>
    </div>
   </div>
   <p className="mb-4 text-cosmos-text-light">{description}</p>
   <ul className="list-disc list-inside text-cosmos-text-light">
    {features.map((feature, index) => (
     <li key={index}>{feature}</li>
    ))}
   </ul>
  </motion.div>
 );
};

export const SolutionsKeyFeaturesSection = () => {
 const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
 };

 return (
  <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
   <motion.h3
    className="text-2xl font-semibold mb-6 text-center text-white"
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
      icon={<RocketIcon className="w-full h-full" />}
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
      icon={<ChainIcon className="w-full h-full" />}
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
      icon={<CreatorIcon className="w-full h-full" />}
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
      icon={<InvestmentIcon className="w-full h-full" />}
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
      icon={<KeyIcon className="w-full h-full" />}
     />
    </motion.div>
   </motion.div>
  </section>
 );
};
