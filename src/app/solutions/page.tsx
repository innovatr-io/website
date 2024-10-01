"use client";

import React from "react";
import Layout from "../components/Layout";
import { SolutionsHeroSection } from "../sections/SolutionsHeroSection";
import { SolutionsKeyFeaturesSection } from "../sections/SolutionsKeyFeaturesSection";
import { SolutionsAdvantagesSection } from "../sections/SolutionsAdvantagesSection";
import { SolutionsClosingSection } from "../sections/SolutionsClosingSection";

export default function Solutions() {
 return (
  <Layout>
   <SolutionsHeroSection />
   <SolutionsKeyFeaturesSection />
   <SolutionsAdvantagesSection />
   <SolutionsClosingSection />
  </Layout>
 );
}
