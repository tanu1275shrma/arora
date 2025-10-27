import React from "react";
import CTA from "./CTA";

const Learn = () => {
  const items = [
    {
      title: "The Freedom Framework",
      desc: "how to design a business that runs without you.",
      img: "/images/pic1.png",
    },
    {
      title: "The Team Alignment Code",
      desc: "simple shifts to make you follow systems and own results with SEASHELL Framework.",
      img: "/images/pic2.png",
    },
    {
      title: "Retention Secrets",
      desc: "keeping high performers while reducing costly churn.",
      img: "/images/pic3.png",
    },
    {
      title: "AI + Tools Advantage",
      desc: "how to plug technology into your team so efficiency scales naturally.",
      img: "/images/pic4.png",
    },
    {
      title: "Execution Blueprint",
      desc: "move from firefighting to smooth operations, so your cash flow and time stablize.",
      img: "/images/pic5.png",
    },
  ];

  return (
    <section className="w-full bg-[#07131f] text-white py-16 px-6 sm:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-14">
        What You’ll Learn in the Masterclass
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto place-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-[#0d1e2d] border border-[#1a2d40] rounded-2xl p-6 sm:p-8 flex items-center gap-6 w-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
            ${index === 4 ? "sm:col-span-2 sm:w-1/2 justify-self-center" : ""}`}
          >
            {/* Left Icon */}
            <div className="flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 sm:w-20 border-2 border-cyan-400 rounded-full lg:w-24 h-auto object-contain"
              />
            </div>

            {/* Right Text */}
            <div>
              <h3 className="text-[#00d8ff] font-semibold text-lg sm:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-[#00d8ff] text-2xl sm:text-3xl font-semibold mb-6">
          Transformation Promise
        </h3>

        <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          “By The End Of This Session, You’ll Know The Exact Roadmap To Set The
          Business On Autopilot With A Team And System That Frees You From Daily
          Firefighting.”
          <CTA />
        </p>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-4px); }
            50% { transform: translateX(4px); }
            75% { transform: translateX(-2px); }
          }
          .animate-shake:hover {
            animation: shake 0.4s ease-in-out 2;
          }
        `}
      </style>
    </section>
  );
};

export default Learn;
