"use client";

import { motion } from "framer-motion";
import { FeeIcon, SecurityIcon, AccessIcon } from "../components/Icons";

const AdvantageCard: React.FC<{
 title: string;
 description: string;
 icon: React.ReactNode;
}> = ({ title, description, icon }) => {
 return (
  <motion.div
   className="bg-cosmos-secondary/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-cosmos-accent/20"
   whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(94, 226, 231, 0.3)" }}
   whileTap={{ scale: 0.95 }}
  >
   <div className="w-16 h-16 mb-4 text-cosmos-accent">{icon}</div>
   <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
   <p className="text-cosmos-text-light">{description}</p>
  </motion.div>
 );
};

export const SolutionsAdvantagesSection = () => {
 const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
 };

 return (
  <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
   <motion.h2
    className="text-3xl font-bold mb-8 text-center text-white"
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
      icon={<FeeIcon className="w-full h-full " />}
     />
    </motion.div>
    <motion.div variants={fadeInUp}>
     <AdvantageCard
      title="Decentralized & Transparent"
      description="All transactions are secured on the blockchain, ensuring transparency and trust between creators and their supporters."
      icon={<SecurityIcon className="w-full h-full" />}
     />
    </motion.div>
    <motion.div variants={fadeInUp}>
     <AdvantageCard
      title="Inclusive Access"
      description="Innovatr makes it possible for everyone to participate in the future of ownership, from fans to investors looking for promising opportunities."
      icon={<AccessIcon className="w-full h-full" />}
     />
    </motion.div>
   </motion.div>
  </section>
 );
};
