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
   <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-cosmos-text-light">
    <main className="w-full max-w-6xl mx-auto">
     <SolutionsHeroSection />
     <SolutionsKeyFeaturesSection />
     <SolutionsAdvantagesSection />
     <SolutionsClosingSection />
    </main>
   </div>
  </Layout>
 );
}
