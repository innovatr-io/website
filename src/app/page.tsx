"use client";

import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";
import { RocketIcon, LightbulbIcon, ShieldIcon } from "@/app/components/Icons";
import { HeroImageSlider } from "@/app/components/HeroImageSlider";

export default function Home() {
 return (
  <div className="relative min-h-screen">
   <GradientBanner className="absolute inset-0 z-0" />
   <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
     <h1 className="text-4xl font-bold mb-8 text-cosmos-text-light">
      Welcome to Innovatr
     </h1>
     <p className="mb-12 text-lg text-cosmos-text-light text-center max-w-2xl">
      Revolutionizing ownership through blockchain technology. Democratizing
      access to high-value assets and intellectual property.
     </p>
     <div className="w-full max-w-4xl mb-12">
      <HeroImageSlider />
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="text-center">
       <RocketIcon className="w-12 h-12 mx-auto text-cosmos-accent" />
       <h3 className="mt-2 text-xl font-semibold text-cosmos-text-light">
        Innovation
       </h3>
       <p className="mt-2 text-cosmos-text-light">
        Pushing the boundaries of asset ownership
       </p>
      </div>
      <div className="text-center">
       <LightbulbIcon className="w-12 h-12 mx-auto text-cosmos-accent" />
       <h3 className="mt-2 text-xl font-semibold text-cosmos-text-light">
        Creativity
       </h3>
       <p className="mt-2 text-cosmos-text-light">
        Empowering creators and investors
       </p>
      </div>
      <div className="text-center">
       <ShieldIcon className="w-12 h-12 mx-auto text-cosmos-accent" />
       <h3 className="mt-2 text-xl font-semibold text-cosmos-text-light">
        Security
       </h3>
       <p className="mt-2 text-cosmos-text-light">
        Ensuring safe and transparent transactions
       </p>
      </div>
     </div>
    </div>
   </Layout>
  </div>
 );
}
