import Link from 'next/link';
import Layout from '../components/Layout';

export default function Visions() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Our Visions</h1>
      <p className="text-xl mb-8">Shaping the future through innovation</p>
      <ul className="list-disc list-inside mb-8">
        <li>Sustainable Development</li>
        <li>Technological Advancement</li>
        <li>Global Connectivity</li>
      </ul>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </Layout>
  );
}
