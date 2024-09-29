"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const GradientBanner = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("h-[40rem] w-full bg-gray-900 relative flex items-center justify-center", className)}>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 h-full w-full bg-gray-900 flex flex-col items-center justify-center text-center">
        {/* Gradient Beam */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            width: ["15rem", "30rem", "15rem"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-hidden [--conic-position:from_70deg_at_center_top] 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
          opacity-70 blur-2xl"
        ></motion.div>
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            width: ["15rem", "30rem", "15rem"],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 overflow-hidden [--conic-position:from_290deg_at_center_top]
          bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600
          opacity-70 blur-2xl"
        ></motion.div>
        {children}
      </div>
    </div>
  );
};
