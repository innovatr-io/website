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
    <div className={cn("h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden", className)}>
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 right-0 bottom-16 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0"></div>
        <div className="absolute top-0 left-8 right-8 bottom-8 bg-gradient-to-r from-rose-500 to-purple-500 opacity-0"></div>
        <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0"></div>
        <motion.div
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500"
        />
        <motion.div
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500"
        />
        <motion.div
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500"
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};
