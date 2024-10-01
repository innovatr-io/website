"use client";

import FeatureCard from "../components/FeatureCard";
import {
 LightningIcon,
 MusicIcon,
 RealEstateIcon,
 CreatorIcon,
} from "../components/Icons";

export const AboutKeyFeaturesSection = () => {
 return (
  <section className="w-full max-w-6xl mx-auto py-16 px-4">
   <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <FeatureCard
     title="Own a Piece of the Future"
     subtitle="Tokenize. Invest. Empower."
     description="Innovatr is revolutionizing ownership and investment by leveraging blockchain technology to make high-value assets and intellectual property (IP) accessible to everyone. From music to art and beyond, Innovatr enables fractional ownership in a decentralized, transparent, and secure way."
     icon={<LightningIcon className="w-6 h-6 text-cosmos-primary" />}
    />
    <FeatureCard
     title="Fine Art & Digital Art"
     subtitle="Democratizing art investment"
     description="Through Innovatr, artists can tokenize both physical and digital artworks, offering investors the ability to own fractional shares of high-value pieces. This democratizes the art market, allowing collectors and fans to invest in art without the need for large upfront capital, while artists gain a new revenue stream."
     icon={<CreatorIcon className="w-6 h-6 text-cosmos-primary" />}
    />
    <FeatureCard
     title="Music Industry"
     subtitle="Empower artists and fans"
     description="Innovatr empowers musicians and artists to tokenize their albums, songs, and royalties, giving fans the opportunity to invest in their favorite creators. By owning fractional shares of music assets, supporters can share in the financial success of their favorite artists, while creators retain greater control over their work."
     icon={<MusicIcon className="w-6 h-6 text-cosmos-primary" />}
    />
    <FeatureCard
     title="Real Estate"
     subtitle="Democratizing property investment"
     description="Innovatr allows property owners to tokenize real estate assets, enabling fractional ownership of commercial and residential properties. Investors can buy and trade shares in real estate projects, making property investment more accessible, while property owners can raise capital without selling entire properties."
     icon={<RealEstateIcon className="w-6 h-6 text-cosmos-primary" />}
    />
   </div>
  </section>
 );
};
