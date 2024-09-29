"use client";

import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
  return (
    <motion.li
      className="mb-10 ml-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title} <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">{year}</span></h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
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
      />
      <TimelineItem
        year="2024"
        title="Expand Asset Offerings"
        description="Introduce new alternative investment opportunities, such as real estate, private equity, and venture capital funds, to our platform."
      />
      <TimelineItem
        year="2025"
        title="Mobile App Development"
        description="Develop and launch a mobile app to provide users with a seamless investment experience on the go."
      />
      <TimelineItem
        year="2025"
        title="Decentralized Exchange Integration"
        description="Integrate our platform with a decentralized exchange to enable peer-to-peer trading of fractional ownership assets."
      />
    </ol>
  );
};
