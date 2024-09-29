import Link from 'next/link';
import Layout from './components/Layout';
import { GradientBanner } from './components/GradientBanner';

export default function Home() {
  return (
    <Layout>
      <GradientBanner>
        <h1 className="text-4xl font-bold mb-8 relative z-20">Welcome to innovatr</h1>
        <p className="text-xl mb-8 relative z-20">Innovating for a better future</p>
        <div className="flex space-x-4 relative z-20">
          <Link href="/solutions" className="btn btn-primary">Our Solutions</Link>
          <Link href="/visions" className="btn btn-secondary">Our Visions</Link>
        </div>
      </GradientBanner>
    </Layout>
  );
}
