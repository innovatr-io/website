"use client";

import { motion } from "framer-motion";

export const SolutionsClosingSection = () => {
 return (
  <section className="w-full max-w-6xl mx-auto py-16 px-4">
   <motion.div
    className="max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
   >
    <h2 className="text-3xl font-bold mb-6 text-center text-white">
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
  </section>
 );
};
