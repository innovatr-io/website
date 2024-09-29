"use client";

import React from "react";
import Layout from "../components/Layout";

const VisionSection = ({ title, content }: { title: string; content: string }) => (
  <section className="mb-8">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
    <p className="text-lg">{content}</p>
  </section>
);

export default function Visions() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <main className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Our Vision: A Future Where Ownership is for Everyone</h1>
          <p className="text-xl mb-12">
            At Innovatr, we believe that ownership shouldn't be exclusive. We're building a platform where creators and investors unite to unlock the full potential of tokenized assets and intellectual property.
          </p>
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
