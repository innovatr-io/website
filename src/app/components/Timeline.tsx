"use client";

import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ year, title, description, icon }: { year: string; title: string; description: string; icon: React.ReactNode }) => {
  return (
    <motion.li
      className="mb-10 ml-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        <span className="absolute flex items-center justify-center w-6 h-6 bg-cosmos-primary rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-cosmos-primary -left-9">
          {icon}
        </span>
        <span className="absolute -left-32 bg-primary-light text-primary-dark text-sm font-medium px-2.5 py-0.5 rounded dark:bg-primary-dark dark:text-primary-light">
          {year}
        </span>
      </motion.div>
      <div className="ml-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-dark focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-dark dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          Learn more 
          <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </motion.li>
  );
};

export const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-8 pl-12">
      <TimelineItem
        year="Q3 - Q4, 2024"
        title="Phase 1: Foundation and Platform Development"
        description="Innovatr Token Launch, Smart Contract Development, Platform MVP Launch"
        icon={
          <svg className="w-6 h-6 text-cosmos-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        }
      />
      <TimelineItem
        year="Q4, 2024 - Q2, 2025"
        title="Phase 2: Community Growth and Music Industry Focus"
        description="Music Industry Launch, Community Building, Voting Rights Implementation, Staking Rewards"
        icon={
          <svg className="w-6 h-6 text-cosmos-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        }
      />
      <TimelineItem
        year="Q1 - Q3, 2025"
        title="Phase 3: Multichain Expansion and Feature Enhancement"
        description="Multichain Tokenization, Secondary Marketplace, Creator Tools"
        icon={
          <svg className="w-6 h-6 text-cosmos-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        }
      />
      <TimelineItem
        year="Q3 - Q4, 2025"
        title="Phase 4: New Industry Expansion and Ecosystem Growth"
        description="Strategic Partnerships, Expansion to Art, Real Estate, and IP"
        icon={
          <svg className="w-6 h-6 text-cosmos-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        }
      />
      <TimelineItem
        year="2026 Onwards"
        title="Phase 5: Full Platform Launch and Global Scaling"
        description="Full Platform Launch, Global Scaling, Continuous Feature Enhancement"
        icon={
          <svg className="w-6 h-6 text-cosmos-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />
    </ol>
  );
};
