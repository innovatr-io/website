import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Company</h1>
      <p className="text-xl mb-8">Innovating for a better future</p>
      <div className="flex space-x-4">
        <Link href="/solutions" className="btn btn-primary">Our Solutions</Link>
        <Link href="/visions" className="btn btn-secondary">Our Visions</Link>
      </div>
    </Layout>
  );
}
