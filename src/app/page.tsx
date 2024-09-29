import Link from "next/link";
import Layout from "./components/Layout";
import { GradientBanner } from "./components/GradientBanner";
import { TextGenerateEffect } from "./components/TextGenerateEffect";
import { PieChart } from "./components/PieChart";

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

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Token Distribution</h2>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-full md:w-1/2">
        <PieChart />
      </div>
      <div className="w-full md:w-1/2">
        <p className="mb-4">
          The VATR token allocation is designed to support long-term
          growth and community involvement.
        </p>
        <p className="mb-4">
          Team allocation ensures responsible project management, while
          the strategic reserve enables strategic partnerships and
          ecosystem development.
        </p>
        <p>
          A substantial portion is dedicated to staking and reward pools,
          fostering community participation and incentivizing engagement.
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li><span className="font-semibold">40%</span> - Public Sale</li>
          <li><span className="font-semibold">25%</span> - Team & Advisors</li>
          <li><span className="font-semibold">20%</span> - Platform Development</li>
          <li><span className="font-semibold">15%</span> - Community Rewards</li>
        </ul>
      </div>
    </div>
   </section>

   <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-start">
        <div className="w-20 h-20 mr-4">
          <img src="/john-doe.png" alt="John Doe" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">John Doe</h3>
          <p className="text-gray-400 mb-2">Co-Founder & CEO</p>
          <p className="text-gray-300">John is a seasoned entrepreneur with a proven track record in the fintech industry. He brings a wealth of experience in building innovative platforms that drive financial inclusion.</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-start">
        <div className="w-20 h-20 mr-4">
          <img src="/jane-smith.png" alt="Jane Smith" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Jane Smith</h3>
          <p className="text-gray-400 mb-2">Co-Founder & CTO</p>
          <p className="text-gray-300">Jane is a highly skilled blockchain engineer with a deep understanding of distributed ledger technologies. She leads the technical vision and development of the platform.</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-start">
        <div className="w-20 h-20 mr-4">
          <img src="/michael-johnson.png" alt="Michael Johnson" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Michael Johnson</h3>
          <p className="text-gray-400 mb-2">Head of Partnerships</p>
          <p className="text-gray-300">Michael has extensive experience in forging strategic alliances and building collaborative ecosystems. He is responsible for expanding the platform's reach through key partnerships.</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-start">
        <div className="w-20 h-20 mr-4">
          <img src="/emily-davis.png" alt="Emily Davis" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Emily Davis</h3>
          <p className="text-gray-400 mb-2">Head of Product</p>
          <p className="text-gray-300">Emily is a product management expert with a passion for creating user-centric experiences. She oversees the platform's product roadmap and ensures seamless user interactions.</p>
        </div>
      </div>
    </div>
   </section>
  </Layout>
 );
}
