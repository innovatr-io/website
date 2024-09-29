import Link from 'next/link';
import Layout from '../components/Layout';

export default function Solutions() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      <p className="text-xl mb-8">Discover how we're solving today's challenges</p>
      <ul className="list-disc list-inside mb-8">
        <li>Innovative Product A</li>
        <li>Groundbreaking Service B</li>
        <li>Revolutionary Technology C</li>
      </ul>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </Layout>
  );
}
