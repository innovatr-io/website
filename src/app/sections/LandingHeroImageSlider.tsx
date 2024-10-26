"use client";

import { ImagesSlider } from "@/app/components/ImageSilder";
import { motion } from "framer-motion";

const images = [
 "https://dummyimage.com/16:9x1080",
 "https://dummyimage.com/16:9x1080",
 "https://dummyimage.com/16:9x1080",
];

export const LandingHeroImageSlider = () => {
 return (
  <ImagesSlider className="h-[66vh] w-full" images={images}>
   <motion.div
    initial={{
     opacity: 0,
     y: -80,
    }}
    animate={{
     opacity: 1,
     y: 0,
    }}
    transition={{
     duration: 0.6,
    }}
    className="z-50 flex flex-col justify-center items-center absolute inset-0"
   >
    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
     Welcome to Innovatr
    </motion.p>
    <motion.p className="text-lg text-white text-center max-w-2xl mb-8">
     Revolutionizing ownership through blockchain technology. Democratizing
     access to high-value assets and intellectual property.
    </motion.p>
    <div className="flex gap-4">
      <button className="px-4 py-2 backdrop-blur-sm border border-cosmos-accent/20 text-white mx-auto text-center rounded-lg relative mt-4 hover:bg-emerald-500/10 transition-all duration-300" style={{ boxShadow: "0 0 20px rgba(94, 226, 231, 0.3)" }}>
        <span>Explore Now →</span>
      </button>
      <button className="px-4 py-2 backdrop-blur-sm border border-cosmos-accent/20 text-white mx-auto text-center rounded-lg relative mt-4 hover:bg-[#5EE2E7]/10 transition-all duration-300" style={{ boxShadow: "0 0 20px rgba(94, 226, 231, 0.3)" }}>
        <span>Launch App →</span>
      </button>
    </div>
   </motion.div>
  </ImagesSlider>
 );
};
