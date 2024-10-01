"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const GradientBanner = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn("w-full h-full relative overflow-hidden", className)}>
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      {/* <div className="absolute inset-0 w-full h-full">
        <motion.div
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-br from-cosmos-primary via-cosmos-secondary to-cosmos-accent"
        />
        <motion.div
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute inset-0 bg-gradient-to-tr from-cosmos-accent via-cosmos-secondary to-cosmos-primary"
        />
      </div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cosmos-background"></div>
    </div>
  );
};
