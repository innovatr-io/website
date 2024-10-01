"use client";

export const AboutPartnersSection = () => {
 return (
  <section className="w-full max-w-6xl mx-auto py-16 px-4">
   <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {["Partner1", "Partner2", "Partner3", "Partner4"].map((partner, index) => (
     <div
      key={index}
      className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md"
     >
      <span className="text-xl font-semibold text-white">{partner}</span>
     </div>
    ))}
   </div>
  </section>
 );
};
