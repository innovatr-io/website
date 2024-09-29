import Link from 'next/link';
import Layout from './components/Layout';
import { GradientBanner } from './components/GradientBanner';

export default function Home() {
  return (
    <Layout>
      <section className="w-full h-[600px]">
        <GradientBanner className="h-full">
          <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
            Revolutionizing Ownership
          </h1>
          <p className="text-2xl mb-8 text-white drop-shadow-md">A unique community driven fractional ownership platform</p>
          <div className="flex space-x-4">
            <Link href="/solutions" className="btn btn-primary btn-lg">Our Solutions</Link>
            <Link href="/visions" className="btn btn-secondary btn-lg">Our Visions</Link>
          </div>
        </GradientBanner>
      </section>

      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Fractional Ownership</h3>
            <p className="text-gray-300">Invest in high-value assets with minimal capital, spreading risk and increasing accessibility.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Community-Driven</h3>
            <p className="text-gray-300">Join a network of like-minded investors and participate in collective decision-making.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Blockchain-Powered</h3>
            <p className="text-gray-300">Leverage blockchain technology for transparent, secure, and efficient transactions.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Diverse Portfolio</h3>
            <p className="text-gray-300">Access a wide range of asset classes, from real estate to fine art and beyond.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
