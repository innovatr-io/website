import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// Simple utility function to conditionally join classNames

interface Feature {
 title: string;
 description: string;
 icon: string;
 className?: string;
}

const FeatureSection: React.FC<{ features: Feature[] }> = ({ features }) => {
 return (
  <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
   <div className="px-8">
    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
     Our Vision and Mission
    </h4>
    <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
     Empowering Innovation, Transforming Tomorrow
    </p>
   </div>

   <div className="relative">
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 xl:border rounded-md dark:border-neutral-800">
     {features.map((feature, index) => (
      <FeatureCard key={index} className={feature.className}>
       <FeatureTitle>{feature.title}</FeatureTitle>
       <FeatureDescription>{feature.description}</FeatureDescription>
       <div className="text-4xl mt-4">{feature.icon}</div>
      </FeatureCard>
     ))}
    </div>
   </div>
  </div>
 );
};

const FeatureCard = ({
 children,
 className,
}: {
 children?: React.ReactNode;
 className?: string;
}) => {
 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
   className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}
  >
   {children}
  </motion.div>
 );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
 return (
  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
   {children}
  </h3>
 );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
 return (
  <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-300">
   {children}
  </p>
 );
};

export default FeatureSection;
