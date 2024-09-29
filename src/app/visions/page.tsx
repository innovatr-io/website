import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function Visions() {
  const features: Feature[] = [
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
    <>
      <h1 className="text-6xl font-bold mb-8">
        Our Vision and Mission
      </h1>
      <p className="text-2xl mb-12">
        Empowering Innovation, Transforming Tomorrow
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {features.map((feature, index) => (
          <div key={index} className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
            <p className="mb-4">{feature.description}</p>
            <div className="text-4xl">{feature.icon}</div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-xl">
        Together, we can build a future where innovation knows no bounds, and every challenge is an opportunity for growth and positive change.
      </p>
    </>
  );
}
