import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const CoachSection = () => {
  const TEAL_BRIGHT = "#00C9E0";
  const BLACK_BG = "#0F141E";

  /* --- Coach Info Card Component Logic (Integrated) --- */
  const CoachInfoCard = () => (
    <div
      className="p-2 sm:p-6 rounded-xl text-center shadow-lg mx-auto mt-8 w-full max-w-xs sm:max-w-sm lg:max-w-none"
      style={{
        backgroundColor: "#0F141E",
        borderColor: TEAL_BRIGHT,
        borderWidth: "2px",
        boxShadow: `0 0 15px 5px rgba(0, 201, 224, 0.3)`, // Teal glow effect
      }}
    >
      {/* Name: Sushil Arora */}
      <h4 className="text-2xl sm:text-3xl font-extrabold mb-1 text-amber-50">
        Sushil Arora
      </h4>

      {/* Designation */}
      <p className="text-base sm:text-lg font-medium mb-2 text-amber-50">
        Team Building Expert & Business Coach
      </p>

      {/* Details/Founder Info */}
      <p className="text-sm sm:text-base text-cyan-400 leading-relaxed">
        Founder: IIHED – Indian Institute of <br className="sm:hidden" /> Human
        Excellence & Development | <br className="sm:hidden" />
        Featured on Josh Talks
      </p>
    </div>
  );

  return (
    <section
      className="relative flex flex-col items-center justify-center text-white font-sans overflow-hidden"
      style={{
        backgroundColor: BLACK_BG,
        backgroundImage: "url('')", // 🔹 Replace with your own image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="relative mt-0 max-w-7xl w-full px-6 py-20 md:py-28">
        <h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14"
          style={{ color: TEAL_BRIGHT }}
        >
          Meet Your Coach
        </h2>

        {/* Main Layout */}
        <div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 rounded-2xl p-8 md:p-10 shadow-2xl"
          style={{
            backgroundColor: "rgba(3, 41, 47, 0.85)",
            border: `1px solid ${TEAL_BRIGHT}`,
            boxShadow: `0 0 40px rgba(0, 201, 224, 0.2)`,
          }}
        >
          {/* LEFT — Coach Image & Info Card (Modified to include the info card) */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-[80%] max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-2 border-teal-400 shadow-xl">
              <img
                src="/images/mentor.png"
                alt="Coach Sushil Arora"
                className="object-cover bg-teal-900 w-full h-full"
              />
              {/* Overlay badges */}
              <div className="absolute bottom-6 left-4 bg-teal-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                25+ YEARS IN BUSINESS
              </div>
              
            </div>

            {/* --- INTEGRATED COACH INFO CARD --- */}
            <CoachInfoCard />
          </div>

          {/* RIGHT — Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: TEAL_BRIGHT }}
            >
              Sushil Arora
            </h3>
            <p className="text-sm md:text-base font-semibold text-gray-100 mb-3">
              25+ Years In Business • 11+ Years In Team Building • Proven
              Frameworks That Actually Work
            </p>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
              Most coaches talk theory. Sushil Arora has lived it, tested it,
              and built systems Indian business owners between ₹5–100 Cr use
              daily to scale, automate, and grow profitably.
            </p>

            <h4
              className="text-lg md:text-xl font-semibold mb-4"
              style={{ color: TEAL_BRIGHT }}
            >
              Why His Guidance Works When Others Fail
            </h4>

            {/* BENEFIT LIST */}
            <div className="space-y-4">
              <Benefit
                title="Practical Frameworks, Not Motivational Talk"
                text="Learn step-by-step systems like the Team Ownership System, Freedom Framework, and Automation Accelerator that fix chaos from the core."
              />
              <Benefit
                title="Backed By Real Business Results"
                text="From companies drowning in turnover to owners stuck in 14-hour days—Sushil helps create scalable, self-managed teams."
              />
              <Benefit
                title="Recognized Authority"
                text="Featured on Josh Talks and trusted by top Indian business leaders with hundreds of success stories and case studies."
              />
              <Benefit
                title="Specialized In Your Stage"
                text="He works exclusively with businesses in the ₹5–100 Cr range where scaling issues and profit leaks hit hardest."
              />
              <Benefit
                title="Clear, Measurable Outcomes"
                text={
                  <>
                    His methods helped brands:
                    <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm space-y-1">
                      <li>
                        Scale India’s top D2C brands to ₹100 Cr+ revenue within
                        24 months.
                      </li>
                      <li>
                        Automate 50–70% of daily operations with practical AI
                        tools.
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Reusable Benefit Subcomponent ---------- */
const Benefit = ({ title, text }) => {
  return (
    <div className="relative">
      <div className="flex items-start">
        <CheckIcon className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0" />
        <div>
          <h5 className="font-bold text-teal-400 text-sm md:text-base">
            {title}
          </h5>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-1">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
