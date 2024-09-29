import Link from 'next/link';
import Layout from '../components/Layout';
import { GradientBanner } from '../components/GradientBanner';

export default function Solutions() {
  return (
    <Layout>
      <GradientBanner className="h-[400px] mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Communities are the thriving factor of our solutions</h1>
        <p className="text-xl text-white text-center max-w-3xl mx-auto">
          In today's world, ownership of high-value assets and intellectual property is largely inaccessible to the broader market. Whether it's music royalties, fine art, real estate, or creative intellectual property, the gatekeepers have traditionally been large corporations and a small group of well-capitalized investors. Innovatr is here to change that.
        </p>
      </GradientBanner>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Solutions</h2>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Fractional Ownership Platform</h2>
          <p className="mb-4">
            Our cutting-edge platform enables fractional ownership of various assets, including real estate, art, and intellectual property. By leveraging blockchain technology, we provide a secure and transparent way for investors to diversify their portfolios and access previously inaccessible investment opportunities.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Tokenization of high-value assets</li>
            <li>Seamless trading of fractional ownership</li>
            <li>Transparent and immutable ownership records</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Smart Contract Management</h2>
          <p className="mb-4">
            We offer advanced smart contract solutions to automate and secure various aspects of asset management and ownership transfer. Our smart contracts ensure that all transactions and agreements are executed precisely as intended, reducing the need for intermediaries and minimizing the risk of disputes.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Automated dividend distribution</li>
            <li>Secure voting mechanisms for asset-related decisions</li>
            <li>Programmable compliance with regulatory requirements</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Decentralized Marketplace</h2>
          <p className="mb-4">
            Our decentralized marketplace provides a user-friendly interface for buying, selling, and trading fractional ownership tokens. This solution enables global accessibility, 24/7 trading, and increased liquidity for traditionally illiquid assets.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Peer-to-peer trading without intermediaries</li>
            <li>Real-time price discovery and market data</li>
            <li>Integration with various wallet solutions</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Asset Tokenization Services</h2>
          <p className="mb-4">
            We provide comprehensive asset tokenization services, helping businesses and individuals convert their valuable assets into tradable digital tokens. Our team of experts guides clients through the entire process, from legal compliance to technical implementation.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Custom token creation and issuance</li>
            <li>Legal and regulatory compliance support</li>
            <li>Integration with existing business systems</li>
          </ul>
        </section>

        <div className="text-center">
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </Layout>
  );
}
