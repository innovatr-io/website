import Link from "next/link";
import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";
import { TextGenerateEffect } from "./components/TextGenerateEffect";

export default function Home() {
 return (
  <Layout>
   <section className="w-full h-[600px]">
    <GradientBanner className="h-full">
     <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
      Revolutionizing Ownership
     </h1>
     <p className="text-2xl mb-8 text-white drop-shadow-md">
      <TextGenerateEffect words="A unique community driven fractional ownership platform" />
     </p>
     <div className="flex space-x-4">
      <Link href="/solutions" className="btn btn-primary btn-lg">
       Our Solutions
      </Link>
      <Link href="/visions" className="btn btn-secondary btn-lg">
       Our Visions
      </Link>
     </div>
    </GradientBanner>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-white">
       Own a Piece of the Future
      </h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       {" "}
       Tokenize. Invest. Empower.
      </h4>
      <p className="text-gray-300">
       {" "}
       Innovatr is revolutionizing ownership and investment by leveraging
       blockchain technology to make high-value assets and intellectual property
       (IP) accessible to everyone. From music to art and beyond, Innovatr
       enables fractional ownership in a decentralized, transparent, and secure
       way.
      </p>
     </div>
     <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-white">
       Fine Art & Digital Art{" "}
      </h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       Democratizing art investment{" "}
      </h4>
      <p className="text-gray-300">
       Through Innovatr, artists can tokenize both physical and digital
       artworks, offering investors the ability to own fractional shares of
       high-value pieces. This democratizes the art market, allowing collectors
       and fans to invest in art without the need for large upfront capital,
       while artists gain a new revenue stream.
      </p>
     </div>
     <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-white">Music Industry</h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       Empower artists and fans
      </h4>
      <p className="text-gray-300">
       Innovatr empowers musicians and artists to tokenize their albums, songs,
       and royalties, giving fans the opportunity to invest in their favorite
       creators. By owning fractional shares of music assets, supporters can
       share in the financial success of their favorite artists, while creators
       retain greater control over their work.
      </p>
     </div>
     <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-white">Real Estate</h3>
      <h4 className="text-lg font-medium mb-4 text-gray-400">
       Democratizing property investment
      </h4>
      <p className="text-gray-300">
       Innovatr allows property owners to tokenize real estate assets, enabling
       fractional ownership of commercial and residential properties. Investors
       can buy and trade shares in real estate projects, making property
       investment more accessible, while property owners can raise capital
       without selling entire properties.
      </p>
     </div>
    </div>
   </section>
  </Layout>
 );
}
