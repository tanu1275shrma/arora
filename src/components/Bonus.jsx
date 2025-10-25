import React from "react";

const Bonus = () => {
  const bonuses = [
    {
      title: "🚀 BONUS 1 - Team Building Process E-Book",
      oldPrice: "$1499",
      newPrice: "FREE!",
      desc: "Comprehensive guide with strategies for higher rankings and solid tracking campaigns.",
    },
    {
      title: "🚀 BONUS 2 - Engaging Millennials & Gen Z Guide",
      oldPrice: "$999",
      newPrice: "FREE!",
      desc: "Unlock deep insights with cutting-edge ad strategies and performance tips.",
    },
    {
      title: "🚀 BONUS 3 - Appraisal & Task Checklist Template",
      oldPrice: "$999",
      newPrice: "FREE!",
      desc: "Real-time customizable dashboard template for all your campaigns.",
    },
    {
      title: "🚀 BONUS 4 - Action Points for Learning Culture",
      oldPrice: "$999",
      newPrice: "FREE!",
      desc: "Swipeable prompt library for social posts, ads, and creative campaigns.",
    },
    {
      title: "🚀 BONUS 5 - AI Tools for Team Management",
      oldPrice: "$499",
      newPrice: "FREE!",
      desc: "Plan and optimize your content workflow with this professional toolkit.",
    },
  ];

  return (
    <section className="bg-[#07131f] text-white py-16 px-6 text-center relative overflow-hidden">
      {/* Heading Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 animate-pulse">
          UNLOCK YOUR
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">
          DIGITAL MARKETING BONUSES
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto my-4 rounded-full animate-pulse"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Supercharge your strategy with our exclusive bonuses! Get access to
          premium resources designed to boost campaigns and accelerate growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 mb-6">
        {bonuses.slice(0, 3).map((bonus, index) => (
          <div
            key={index}
            className="bg-[#111a33] border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 text-center animate-fadeIn"
          >
            <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
            <p className="text-cyan-400 font-semibold mb-1 line-through">
              {bonus.oldPrice}
            </p>
            <p className="text-white font-semibold mb-4">{bonus.newPrice}</p>
            <p className="text-cyan-400 text-sm">{bonus.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center mb-10">
        {bonuses.slice(3).map((bonus, index) => (
          <div
            key={index}
            className="bg-[#111a33] border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 text-center animate-fadeIn"
          >
            <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
            <p className="text-cyan-400 font-semibold mb-1 line-through">
              {bonus.oldPrice}
            </p>
            <p className="text-white font-semibold mb-4">{bonus.newPrice}</p>
            <p className="text-cyan-400 text-sm">{bonus.desc}</p>
          </div>
        ))}
      </div>

      {/* Below Text */}
      <div className="mt-16">
        <p className="text-gray-300 text-lg md:text-xl mb-2 animate-fadeIn">
          These aren’t just bonuses
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 ">
          This Bonuses Is Your Shortcut To Building A Team That Grows Your
          Business Without You.
        </h2>

        {/* CTA Section */}
        <div className="relative inline-block">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#a50a0a] text-sm px-4 py-1 rounded-full text-white flex items-center gap-2 ">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            ATTEND LIVE
          </div>

          <button
            className="bg-gradient-to-b from-red-500 to-red-700 text-white font-bold text-lg md:text-xl mt-8 px-10 py-4 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.7)]
           hover:scale-105 transition-all duration-300 animate-bounce hover:animate-pulse"
          >
            Discover How to Build a Smooth Business That Runs Without You
          </button>
        </div>

        <p className="text-gray-100 text-lg mt-4">
          Note: Take Action Before It’s Too Late!
        </p>
      </div>
    </section>
  );
};

export default Bonus;
