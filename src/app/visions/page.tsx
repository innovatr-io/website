import React from 'react';
import FeatureSection from './FeatureSection';

export default function Visions() {
  const features = [
    {
      title: "Our Mission",
      description: "At Innovatr, our mission is to revolutionize the way businesses approach innovation. We believe that every company has the potential to drive meaningful change.",
      icon: "🚀",
    },
    {
      title: "Our Approach",
      description: "We take a holistic approach to innovation, recognizing that true transformation requires more than just new ideas. Our methodology encompasses fostering creativity and offering expert guidance.",
      icon: "🔍",
    },
    {
      title: "Our Impact",
      description: "By partnering with Innovatr, companies can accelerate their innovation processes, develop groundbreaking products and services, and stay ahead of market trends.",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <FeatureSection features={features} />
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-8">
            Together, we can build a future where innovation knows no bounds, and every challenge is an opportunity for growth and positive change.
          </p>
          <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
