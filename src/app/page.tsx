"use client";

import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";
import { RocketIcon, LightbulbIcon, ShieldIcon } from "@/app/components/Icons";
import { HeroImageSlider } from "./sections/HeroImageSlider";

export default function Home() {
 return (
  <div className="relative min-h-screen">
   <HeroImageSlider />
   <GradientBanner className="absolute inset-0 z-0" />
   <Layout>
    <div className="flex flex-col items-center justify-center min-h-[34vh] py-12 px-4 sm:px-6 lg:px-8">
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
