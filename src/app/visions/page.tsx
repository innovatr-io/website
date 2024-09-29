import Link from 'next/link';
import Layout from '../components/Layout';

export default function Visions() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Our Vision</h1>
      <p className="text-xl mb-8">Empowering Innovation, Transforming Tomorrow</p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At Innovatr, our mission is to revolutionize the way businesses approach innovation. We believe that every company, regardless of size or industry, has the potential to drive meaningful change and create groundbreaking solutions. Our goal is to empower organizations with the tools, knowledge, and support they need to unlock their innovative potential and thrive in an ever-evolving marketplace.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="mb-4">
          We take a holistic approach to innovation, recognizing that true transformation requires more than just new ideas. Our comprehensive methodology encompasses:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Fostering a culture of creativity and continuous improvement</li>
          <li>Providing cutting-edge tools and technologies to facilitate ideation and execution</li>
          <li>Offering expert guidance and support throughout the innovation journey</li>
          <li>Cultivating a network of industry leaders and innovators for collaboration and knowledge sharing</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
        <p className="mb-4">
          By partnering with Innovatr, companies can expect to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Accelerate their innovation processes</li>
          <li>Develop groundbreaking products and services</li>
          <li>Improve operational efficiency and effectiveness</li>
          <li>Stay ahead of market trends and customer demands</li>
          <li>Foster a more engaged and motivated workforce</li>
        </ul>
      </div>
      <div className="mb-8">
        <p>
          Together, we can build a future where innovation knows no bounds, and every challenge is an opportunity for growth and positive change.
        </p>
      </div>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </Layout>
  );
}
