"use client";

import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import FramedTextBox from "../components/FramedTextBox";

const VisionSection = ({
 title,
 content,
}: {
 title: string;
 content: string;
}) => (
 <section className="mb-8">
  <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
  <p className="text-base">{content}</p>
 </section>
);

export default function Visions() {
 return (
  <Layout>
   <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8  text-cosmos-text-light">
    <main className="max-w-4xl mx-auto text-center">
     <motion.h1
      className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
     >
      Our Vision: A Future Where Ownership is for Everyone
     </motion.h1>
     <FramedTextBox useTextGenerate>
      At Innovatr, we believe that ownership shouldn&apos;t be exclusive.
      We&apos;re building a platform where creators and investors unite to
      unlock the full potential of tokenized assets and intellectual property.
     </FramedTextBox>
     <VisionSection
      title="Breaking Down Barriers"
      content="Innovatr aims to democratize ownership of high-value assets like music royalties, art, real estate, and intellectual property using blockchain technology. We believe everyone should have the chance to participate in the growth and success of the things they believe in."
     />
     <VisionSection
      title="Empowering Creators and Communities"
      content="Innovatr empowers creators to retain control of their work while raising funds directly from supporters. Through our platform, creators can tokenize assets, offer fractional ownership, and engage with their communities in new ways."
     />
     <VisionSection
      title="A Decentralized Future"
      content="We envision a world of transparent, secure, and decentralized ownership. Our blockchain-based platform ensures immutable transaction records, while our multichain support offers flexibility and access to multiple ecosystems."
     />
     <VisionSection
      title="Innovatr Token"
      content="The Innovatr token is central to our vision, allowing users to reduce fees, earn rewards, and participate in platform governance. It empowers our community to shape the future of Innovatr and have a voice in the platform's direction."
     />
     <VisionSection
      title="A New Standard of Ownership"
      content="Our goal is to set a new standard for ownership in the digital age. Innovatr bridges the gap between creators and investors, fostering a global community that values transparency, innovation, and equal opportunity in a decentralized, inclusive, and accessible future."
     />
    </main>
   </div>
  </Layout>
 );
}
