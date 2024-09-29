"use client";

import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ year, title, description, icon }: { year: string; title: string; description: string; icon: React.ReactNode }) => {
  return (
    <motion.li
      className="mb-10 ml-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-dark">
        {icon}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
        <span className="bg-primary-light text-primary-dark text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-dark dark:text-primary-light ml-3">
          {year}
        </span>
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-dark focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-dark dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Learn more 
        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </motion.li>
  );
};

export const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <TimelineItem
        year="2024"
        title="Platform Launch"
        description="Release the initial version of our fractional ownership platform, enabling users to invest in a variety of alternative assets."
        icon={<svg className="w-3 h-3 text-white dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
        </svg>}
      />
      <TimelineItem
        year="2024"
        title="Expand Asset Offerings"
        description="Introduce new alternative investment opportunities, such as real estate, private equity, and venture capital funds, to our platform."
        icon={<svg className="w-3 h-3 text-white dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
        </svg>}
      />
      <TimelineItem
        year="2025"
        title="Mobile App Development"
        description="Develop and launch a mobile app to provide users with a seamless investment experience on the go."
        icon={<svg className="w-3 h-3 text-white dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
        </svg>}
      />
      <TimelineItem
        year="2025"
        title="Decentralized Exchange Integration"
        description="Integrate our platform with a decentralized exchange to enable peer-to-peer trading of fractional ownership assets."
        icon={<svg className="w-3 h-3 text-white dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
        </svg>}
      />
    </ol>
  );
};
