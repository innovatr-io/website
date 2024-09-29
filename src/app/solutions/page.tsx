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
            title="Tokenized Ownership"
            subtitle="Own a Piece of the Future"
            description="We tokenize high-value assets and intellectual property (IP), allowing them to be divided into smaller, more affordable shares. This means you can own a fraction of an artist's album, a piece of fine art, or shares in intellectual property that would otherwise be inaccessible."
            features={[
              "Fractional ownership of high-value assets",
              "Access to previously inaccessible investments",
              "Transparent and secure ownership records"
            ]}
          />

          <SolutionCard
            title="Multichain Flexibility"
            subtitle="Choose Your Blockchain"
            description="Innovatr offers the flexibility to tokenize assets across multiple blockchains, including Solana, Ethereum, and Binance Smart Chain. This multichain approach ensures liquidity, security, and the ability to tap into the growing decentralized finance (DeFi) ecosystem, allowing creators and investors to choose the blockchain that best suits their needs."
            features={[
              "Support for multiple blockchains",
              "Enhanced liquidity and security",
              "Integration with DeFi ecosystems"
            ]}
          />

          <SolutionCard
            title="Empowering Creators"
            subtitle="Take Control of Your Work"
            description="For the first time, creators can tokenize their work and maintain control over it. Whether it's a music album, a digital piece of art, or a film, Innovatr allows creators to engage directly with their fans and supporters, who can invest in their projects and share in their success."
            features={[
              "Direct engagement with fans and supporters",
              "Tokenization of creative works",
              "New revenue streams for creators"
            ]}
          />

          <SolutionCard
            title="Fractional Investment"
            subtitle="Invest in What You Believe In"
            description="By allowing fractional ownership, Innovatr opens the door for individuals to invest small amounts in assets they believe in. This lowers the financial barrier to entry and allows more people to diversify their investments across multiple assets."
            features={[
              "Low barrier to entry for investments",
              "Diversification opportunities",
              "Access to high-value asset investments"
            ]}
          />

          <SolutionCard
            title="Innovatr Token"
            subtitle="Powering Our Ecosystem"
            description="At the heart of our platform is the Innovatr token, issued on the Solana blockchain. Users can utilize $INTR for reduced transaction fees, staking rewards, and exclusive platform benefits. It's a key part of our ecosystem, driving engagement and providing value to both creators and investors."
            features={[
              "Reduced transaction fees",
              "Staking rewards",
              "Exclusive platform benefits"
            ]}
          />
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center mt-16">Our Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Lower Fees</h3>
            <p className="text-gray-300">
              By using blockchain technology, we cut out unnecessary middlemen, which means lower fees for both creators and investors.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Decentralized & Transparent</h3>
            <p className="text-gray-300">
              All transactions are secured on the blockchain, ensuring transparency and trust between creators and their supporters.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Inclusive Access</h3>
            <p className="text-gray-300">
              Innovatr makes it possible for everyone to participate in the future of ownership, from fans who want to support their favorite creators to investors looking for promising opportunities.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </Layout>
  );
}
