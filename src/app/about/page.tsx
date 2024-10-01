"use client";

import Layout from "../components/Layout";
import { AboutHeroSection } from "../sections/AboutHeroSection";
import { AboutKeyFeaturesSection } from "../sections/AboutKeyFeaturesSection";
import { AboutTokenDistributionSection } from "../sections/AboutTokenDistributionSection";
import { AboutRoadmapSection } from "../sections/AboutRoadmapSection";
import { AboutPartnersSection } from "../sections/AboutPartnersSection";

export default function About() {
 return (
  <Layout>
   <AboutHeroSection />
   <AboutKeyFeaturesSection />
   <AboutTokenDistributionSection />
   <AboutRoadmapSection />
   <AboutPartnersSection />
  </Layout>
 );
}
