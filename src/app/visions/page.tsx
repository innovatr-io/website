"use client";

import React from "react";
import Layout from "../components/Layout";
import { VisionsHeroSection } from "../sections/VisionsHeroSection";
import { VisionsSectionComponent } from "../sections/VisionsSectionComponent";

export default function Visions() {
 return (
  <Layout>
   <VisionsHeroSection />
   <VisionsSectionComponent
    title="Breaking Down Barriers"
    content="Innovatr aims to democratize ownership of high-value assets like music royalties, art, real estate, and intellectual property using blockchain technology. We believe everyone should have the chance to participate in the growth and success of the things they believe in."
   />
   <VisionsSectionComponent
    title="Empowering Creators and Communities"
    content="Innovatr empowers creators to retain control of their work while raising funds directly from supporters. Through our platform, creators can tokenize assets, offer fractional ownership, and engage with their communities in new ways."
   />
   <VisionsSectionComponent
    title="A Decentralized Future"
    content="We envision a world of transparent, secure, and decentralized ownership. Our blockchain-based platform ensures immutable transaction records, while our multichain support offers flexibility and access to multiple ecosystems."
   />
   <VisionsSectionComponent
    title="Innovatr Token"
    content="The Innovatr token is central to our vision, allowing users to reduce fees, earn rewards, and participate in platform governance. It empowers our community to shape the future of Innovatr and have a voice in the platform's direction."
   />
   <VisionsSectionComponent
    title="A New Standard of Ownership"
    content="Our goal is to set a new standard for ownership in the digital age. Innovatr bridges the gap between creators and investors, fostering a global community that values transparency, innovation, and equal opportunity in a decentralized, inclusive, and accessible future."
   />
  </Layout>
 );
}
