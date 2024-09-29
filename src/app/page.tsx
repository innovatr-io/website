"use client";

import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";

export default function Home() {
 return (
  <div className="relative min-h-screen">
    <GradientBanner className="absolute inset-0 z-0" />
    <Layout className="relative z-10">
      {/* Content will be added here */}
    </Layout>
  </div>
 );
}
