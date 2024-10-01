import { Timeline } from "../components/Timeline";

export const OurJourney = () => {
  const milestones = [
    {
      date: "2020",
      title: "Inception",
      description: "Innovatr was founded with a vision to revolutionize asset ownership.",
    },
    {
      date: "2021",
      title: "Platform Launch",
      description: "We launched our first version of the Innovatr platform.",
    },
    {
      date: "2022",
      title: "Expansion",
      description: "Innovatr expanded its offerings to include a wider range of assets.",
    },
    {
      date: "2023",
      title: "Global Reach",
      description: "We achieved a significant milestone of users from over 50 countries.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold mb-6 text-cosmos-text-light">Our Journey</h2>
      <Timeline milestones={milestones} />
    </div>
  );
};
