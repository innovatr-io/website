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
      <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
        <span>Explore Now →</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
      </button>
      <button className="px-4 py-2 backdrop-blur-sm border bg-purple-300/10 border-purple-500/20 text-white mx-auto text-center rounded-full relative mt-4">
        <span>Launch App →</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-purple-500 to-transparent" />
      </button>
    </div>
   </motion.div>
  </ImagesSlider>
 );
};
