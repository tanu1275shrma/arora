import React from "react";
// Importing the icon for the list items
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const StuckSection = () => {
  // Define colors consistent with Hero.jsx
  const TEAL_BRIGHT = "rgb(0, 201, 224)"; // #00C9E0
  const TEAL_DARK_BG = "rgb(3, 41, 47, 0.5)"; // Slightly transparent dark teal background
  const GRAY_DARK_BG = "rgb(20, 30, 40)"; // A very dark blue-gray background for the section

  const benefitPoints = [
    "Must focus on giving the owner freedom (not just growth).",
    "Must include processes & automation to keep the business smooth.",
    "Must offer a repeatable hiring framework to ensure the right people in the right roles.",
    "Must give you a roadmap to remove chaos step by step.",
  ];

  return (
    <div
      style={{ backgroundColor: GRAY_DARK_BG }}
      className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 font-sans text-white border-t border-gray-800"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12 leading-tight">
          If you are feeling stuck with{" "}
          <span
            style={{ backgroundColor: TEAL_BRIGHT }}
            className="px-2 py-0.5 font-bold text-gray-900 leading-none inline-block rounded-md"
          >
            low income
          </span>
          ,{" "}
          <span
            style={{ backgroundColor: TEAL_BRIGHT }}
            className="px-2 py-0.5 font-bold text-gray-900 leading-none inline-block rounded-md"
          >
            no time
          </span>
          , and{" "}
          <span
            style={{ backgroundColor: TEAL_BRIGHT }}
            className="px-2 py-0.5 font-bold text-gray-900 leading-none inline-block rounded-md"
          >
            no team
          </span>
          , you need a business training that ...
        </h2>

        {/* Benefits Grid (2x2 on larger screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefitPoints.map((point, index) => (
            <div
              key={index}
              style={{
                backgroundColor: TEAL_DARK_BG,
                borderColor: TEAL_BRIGHT,
                boxShadow: `0 0 10px 1px rgba(0, 201, 224, 0.2)`, // Subtle teal glow
              }}
              className="p-6 rounded-lg border border-opacity-30 text-left flex items-start transition duration-300 hover:scale-[1.01]"
            >
              <ArrowRightIcon className="h-6 w-6 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-base sm:text-lg font-medium">{point}</p>
            </div>
          ))}
        </div>

        {/* Final Conclusion Statement */}
        <h3 className="mt-16 text-xl sm:text-2xl md:text-3xl font-normal leading-normal px-4">
          <span className="font-extrabold " style={{ color: TEAL_BRIGHT }}>
            "Our Approach Focuses Exactly On These Areas
          </span>
          <span className="font-extrabold text-white ">
            —Helping Owners Achieve Growth, Reliable Income, And Freedom By
            Fixing Their Hiring And Operational Bottlenecks."
          </span>
        </h3>
      </div>
      <p className="text-white text-lg mt-8">
        That’s exactly what we’ll cover in our Business Automation Webinar:
        real-world strategies and tools you can apply immediately—
      </p>
    </div>
  );
};

export default StuckSection;
