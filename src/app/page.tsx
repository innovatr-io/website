import Link from 'next/link';
import Layout from './components/Layout';
import { GradientBanner } from './components/GradientBanner';

export default function Home() {
  return (
    <Layout>
      <section className="w-full h-[600px]">
        <GradientBanner className="h-full">
          <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">Revolutionizing Ownership</h1>
          <p className="text-2xl mb-8 text-white drop-shadow-md">Innovating for a better future</p>
          <div className="flex space-x-4">
            <Link href="/solutions" className="btn btn-primary btn-lg">Our Solutions</Link>
            <Link href="/visions" className="btn btn-secondary btn-lg">Our Visions</Link>
          </div>
        </GradientBanner>
      </section>
      {/* Add more sections here as needed */}
    </Layout>
  );
}
