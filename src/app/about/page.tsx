"use client";

import { useEffect } from "react";
import Layout from "../components/Layout";
import SectionCard from "../components/SectionCard";
import { AboutHeroSection } from "../sections/AboutHeroSection";
import { AboutKeyFeaturesSection } from "../sections/AboutKeyFeaturesSection";
import { AboutTokenDistributionSection } from "../sections/AboutTokenDistributionSection";
import { AboutRoadmapSection } from "../sections/AboutRoadmapSection";
import { AboutPartnersSection } from "../sections/AboutPartnersSection";

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.section-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          card.classList.add('slide-in');
        } else {
          card.classList.remove('slide-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div className="space-y-24">
        <SectionCard>
          <AboutHeroSection />
        </SectionCard>
        <SectionCard>
          <AboutKeyFeaturesSection />
        </SectionCard>
        <SectionCard>
          <AboutTokenDistributionSection />
        </SectionCard>
        <SectionCard>
          <AboutRoadmapSection />
        </SectionCard>
        <SectionCard>
          <AboutPartnersSection />
        </SectionCard>
      </div>
    </Layout>
  );
}
