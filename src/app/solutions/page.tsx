import Link from 'next/link';
import Layout from '../components/Layout';
import { GradientBanner } from '../components/GradientBanner';

interface SolutionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, subtitle, description, features }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-white">{title}</h2>
      <h3 className="text-lg font-medium mb-4 text-gray-400">{subtitle}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <ul className="list-disc list-inside text-gray-300">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

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
        <h2 className="text-3xl font-bold mb-4 text-center">What do we bring to the Market?</h2>
        <p className="text-lg mb-8 text-center">
          Innovatr solves current challenges by leveraging the power of blockchain technology to democratize ownership and investment. Our platform allows anyone, anywhere, to own a fractional share of tokenized assets, breaking down traditional barriers and making ownership accessible to all.
        </p>
        <h3 className="text-2xl font-semibold mb-6 text-center">Here's how we do it:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <SolutionCard
            title="Fractional Ownership Platform"
            subtitle="Diversify Your Portfolio"
            description="Our cutting-edge platform enables fractional ownership of various assets, including real estate, art, and intellectual property. By leveraging blockchain technology, we provide a secure and transparent way for investors to diversify their portfolios and access previously inaccessible investment opportunities."
            features={[
              "Tokenization of high-value assets",
              "Seamless trading of fractional ownership",
              "Transparent and immutable ownership records"
            ]}
          />

          <SolutionCard
            title="Smart Contract Management"
            subtitle="Automate and Secure"
            description="We offer advanced smart contract solutions to automate and secure various aspects of asset management and ownership transfer. Our smart contracts ensure that all transactions and agreements are executed precisely as intended, reducing the need for intermediaries and minimizing the risk of disputes."
            features={[
              "Automated dividend distribution",
              "Secure voting mechanisms for asset-related decisions",
              "Programmable compliance with regulatory requirements"
            ]}
          />

          <SolutionCard
            title="Decentralized Marketplace"
            subtitle="Trade 24/7 Globally"
            description="Our decentralized marketplace provides a user-friendly interface for buying, selling, and trading fractional ownership tokens. This solution enables global accessibility, 24/7 trading, and increased liquidity for traditionally illiquid assets."
            features={[
              "Peer-to-peer trading without intermediaries",
              "Real-time price discovery and market data",
              "Integration with various wallet solutions"
            ]}
          />

          <SolutionCard
            title="Asset Tokenization Services"
            subtitle="Unlock Your Asset's Potential"
            description="We provide comprehensive asset tokenization services, helping businesses and individuals convert their valuable assets into tradable digital tokens. Our team of experts guides clients through the entire process, from legal compliance to technical implementation."
            features={[
              "Custom token creation and issuance",
              "Legal and regulatory compliance support",
              "Integration with existing business systems"
            ]}
          />
        </div>

        <div className="text-center">
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </Layout>
  );
}
