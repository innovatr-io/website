import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FeatureSection: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
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
  );
};

export default FeatureSection;
