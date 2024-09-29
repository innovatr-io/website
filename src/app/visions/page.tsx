import Link from 'next/link';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

const FeatureSection = dynamic(() => import('./FeatureSection'), { ssr: false });

export default function Visions() {
  const features = [
    {
      title: "Our Mission",
      description: "At Innovatr, our mission is to revolutionize the way businesses approach innovation. We believe that every company, regardless of size or industry, has the potential to drive meaningful change and create groundbreaking solutions.",
      icon: "🚀",
      className: "border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Our Approach",
      description: "We take a holistic approach to innovation, recognizing that true transformation requires more than just new ideas. Our comprehensive methodology encompasses fostering creativity, providing cutting-edge tools, and offering expert guidance.",
      icon: "🔍",
      className: "border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Our Impact",
      description: "By partnering with Innovatr, companies can expect to accelerate their innovation processes, develop groundbreaking products and services, improve operational efficiency, and stay ahead of market trends.",
      icon: "💡",
      className: "border-b lg:border-none dark:border-neutral-800",
    },
  ];

  return (
    <Layout>
      <FeatureSection features={features} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Together, we can build a future where innovation knows no bounds, and every challenge is an opportunity for growth and positive change.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
