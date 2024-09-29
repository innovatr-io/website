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
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="py-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Vision and Mission
          </h2>
          <p className="text-center mb-12">
            Empowering Innovation, Transforming Tomorrow
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-4xl">{feature.icon}</div>
              </div>
            ))}
          </div>
        </div>
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
