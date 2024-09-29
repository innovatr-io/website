import Link from 'next/link';
import Layout from './components/Layout';
import { GradientBanner } from './components/GradientBanner';

export default function Home() {
  return (
    <Layout>
      <GradientBanner>
        <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">Welcome to innovatr</h1>
        <p className="text-2xl mb-8 text-white drop-shadow-md">Innovating for a better future</p>
        <div className="flex space-x-4">
          <Link href="/solutions" className="btn btn-primary btn-lg">Our Solutions</Link>
          <Link href="/visions" className="btn btn-secondary btn-lg">Our Visions</Link>
        </div>
      </GradientBanner>
    </Layout>
  );
}
