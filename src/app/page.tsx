"use client";

import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";
import { RocketIcon, LightbulbIcon, ShieldIcon } from "@/app/components/Icons";

export default function Home() {
 return (
  <div className="relative min-h-screen">
    <GradientBanner className="absolute inset-0 z-0" />
    <Layout className="relative z-10">
      {/* Add your content here */}
      <div className="flex justify-center space-x-8 mt-12">
        <div className="text-center">
          <RocketIcon className="w-12 h-12 mx-auto text-cosmos-accent" />
          <h3 className="mt-2 text-xl font-semibold">Innovation</h3>
        </div>
        <div className="text-center">
          <LightbulbIcon className="w-12 h-12 mx-auto text-cosmos-accent" />
          <h3 className="mt-2 text-xl font-semibold">Creativity</h3>
        </div>
        <div className="text-center">
          <ShieldIcon className="w-12 h-12 mx-auto text-cosmos-accent" />
          <h3 className="mt-2 text-xl font-semibold">Security</h3>
        </div>
      </div>
    </Layout>
  </div>
 );
}
