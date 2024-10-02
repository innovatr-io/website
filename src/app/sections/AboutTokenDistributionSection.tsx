"use client";

import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("../components/PieChart"), {
 ssr: false,
});

export const AboutTokenDistributionSection = () => {
 return (
  <section className="w-full max-w-6xl mx-auto py-16 px-4">
   <h2 className="text-3xl font-bold mb-8 text-center">Token Distribution</h2>
   <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    <div className="w-full md:w-1/2">
     <PieChart />
    </div>
    <div className="w-full md:w-1/2">
     <p className="mb-4">
      The VATR token allocation is designed to support long-term growth, community involvement, and project sustainability.
     </p>
     <p className="mb-4">
      Team allocation ensures responsible project management, while the strategic reserve enables partnerships and ecosystem development. A substantial portion is dedicated to staking, reward pools, and airdrops, fostering community participation and incentivizing engagement.
     </p>
     <ul className="mt-4 list-disc list-inside">
      <li>
       <span className="font-semibold">45%</span> - Staking, Reward Pool, Airdrops
      </li>
      <li>
       <span className="font-semibold">20%</span> - Team Allocation
      </li>
      <li>
       <span className="font-semibold">20%</span> - Strategic Reserve
      </li>
      <li>
       <span className="font-semibold">10%</span> - Liquidity
      </li>
      <li>
       <span className="font-semibold">5%</span> - Investors
      </li>
     </ul>
    </div>
   </div>
  </section>
 );
};
