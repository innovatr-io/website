"use client";

import type { Metadata } from "next";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { SolutionsHeroSection } from "../sections/SolutionsHeroSection";
import { SolutionsKeyFeaturesSection } from "../sections/SolutionsKeyFeaturesSection";
import { SolutionsAdvantagesSection } from "../sections/SolutionsAdvantagesSection";
import { SolutionsClosingSection } from "../sections/SolutionsClosingSection";
import SectionCard from "../components/SectionCard";

export const metadata: Metadata = {
  title: 'Our Solutions',
  description: 'Discover Innovatr\'s blockchain-based solutions for asset tokenization and fractional ownership.',
  openGraph: {
    title: 'Innovatr Solutions',
    description: 'Discover Innovatr\'s blockchain-based solutions for asset tokenization and fractional ownership.',
    images: ['/images/solutions-og.jpg'], // Add your OG image
  },
};

export default function Solutions() {
 useEffect(() => {
  const handleScroll = () => {
   const cards = document.querySelectorAll(".section-card");
   cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
     card.classList.add("slide-in");
    } else {
     card.classList.remove("slide-in");
    }
   });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check

  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
  <Layout>
   <div className="space-y-24 my-12">
    <SolutionsHeroSection />
    <SectionCard>
     <SolutionsKeyFeaturesSection />
    </SectionCard>
    <SectionCard>
     <SolutionsAdvantagesSection />
    </SectionCard>
    <SectionCard>
     <SolutionsClosingSection />
    </SectionCard>
   </div>
  </Layout>
 );
}
