"use client";

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useInView } from 'react-intersection-observer';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [20, 20, 40, 20];
const labels = ['Team', 'Strategic Reserve', 'Staking/Reward Pool', 'Other'];
const total = data.reduce((sum, value) => sum + value, 0);

const createPieChartData = (animationPercentage: number) => ({
  labels: labels.map((label, index) => `${label} (${(data[index] / total * 100).toFixed(1)}%)`),
  datasets: [
    {
      data: data.map(value => value * (animationPercentage / 100)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',   // Soft red
        'rgba(54, 162, 235, 0.8)',   // Soft blue
        'rgba(255, 206, 86, 0.8)',   // Soft yellow
        'rgba(75, 192, 192, 0.8)',   // Soft teal
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',     // Solid red
        'rgba(54, 162, 235, 1)',     // Solid blue
        'rgba(255, 206, 86, 1)',     // Solid yellow
        'rgba(75, 192, 192, 1)',     // Solid teal
      ],
      borderWidth: 1,
    },
  ],
});

const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'center' as const,
      labels: {
        color: 'white',
        padding: 20,
        font: {
          size: 14
        }
      }
    },
  },
};

export default function PieChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationPercentage, setAnimationPercentage] = useState(0);

  useEffect(() => {
    if (inView) {
      let start: number | null = null;
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min((progress / 1000) * 100, 100);
        setAnimationPercentage(percentage);
        if (percentage < 100) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Pie data={createPieChartData(animationPercentage)} options={pieChartOptions} />
    </div>
  );
}
