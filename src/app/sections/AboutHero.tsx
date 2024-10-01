import { TextGenerateEffect } from "../components/TextGenerateEffect";

export const AboutHero = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-cosmos-text-light">
        About Innovatr
      </h1>
      <TextGenerateEffect words="Innovatr is at the forefront of the blockchain revolution, reimagining ownership for the digital age. Our platform empowers creators, investors, and visionaries to tokenize, trade, and benefit from a wide array of assets and intellectual properties." />
    </div>
  );
};
