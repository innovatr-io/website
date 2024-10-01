import { PieChart } from "../components/PieChart";

export const OurImpact = () => {
  const data = [
    { name: "Tokenized Assets", value: 60 },
    { name: "Active Users", value: 25 },
    { name: "Transactions", value: 15 },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold mb-6 text-cosmos-text-light">Our Impact</h2>
      <div className="flex justify-center">
        <PieChart data={data} />
      </div>
    </div>
  );
};
