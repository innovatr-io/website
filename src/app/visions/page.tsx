import Link from 'next/link';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

const FeatureSection = dynamic(() => import('./FeatureSection'), { ssr: false });

export default function Visions() {
  const features = [
    {
      title: "Our Mission",
      description: "At Innovatr, our mission is to revolutionize the way businesses approach innovation. We believe that every company, regardless of size or industry, has the potential to drive meaningful change and create groundbreaking solutions. Our goal is to empower organizations with the tools, knowledge, and support they need to unlock their innovative potential and thrive in an ever-evolving marketplace.",
      icon: "🚀",
    },
    {
      title: "Our Approach",
      description: "We take a holistic approach to innovation, recognizing that true transformation requires more than just new ideas. Our comprehensive methodology encompasses fostering creativity, providing cutting-edge tools, offering expert guidance, and cultivating a network of industry leaders for collaboration.",
      icon: "🔍",
    },
    {
      title: "Our Impact",
      description: "By partnering with Innovatr, companies can expect to accelerate their innovation processes, develop groundbreaking products and services, improve operational efficiency, stay ahead of market trends, and foster a more engaged workforce.",
      icon: "💡",
    },
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h1>
            <p className="text-xl text-gray-600 mb-12">Empowering Innovation, Transforming Tomorrow</p>
          </div>
          <FeatureSection features={features} />
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Together, we can build a future where innovation knows no bounds, and every challenge is an opportunity for growth and positive change.
            </p>
            <Link href="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
