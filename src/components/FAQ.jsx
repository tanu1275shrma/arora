import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What will I learn in this Digital Marketing Webinar?",
      answer:
        "You’ll learn how to build powerful marketing campaigns, generate consistent leads, and convert them using proven digital strategies.",
    },
    {
      question: "Is this webinar suitable for beginners?",
      answer:
        "Absolutely! The session starts from the basics and moves to advanced strategies, making it ideal for both beginners and professionals.",
    },
    {
      question: "Will I get access to tools or templates after the session?",
      answer:
        "Yes, you’ll receive exclusive templates, resources, and actionable checklists to implement the strategies discussed in the webinar.",
    },
    {
      question: "How long is the webinar and what’s the format?",
      answer:
        "The webinar lasts about 90 minutes, including live demonstrations, practical examples, and a Q&A session at the end.",
    },
    {
      question: "Do I need prior marketing experience to attend?",
      answer:
        "Not at all! Whether you’re a student, entrepreneur, or freelancer, you’ll easily follow along with our step-by-step training.",
    },
    {
      question: "Will I learn about social media advertising too?",
      answer:
        "Yes! We’ll cover Facebook, Instagram, and Google Ads — including how to create campaigns that actually convert.",
    },
    {
      question: "Will I get a recording if I can’t attend live?",
      answer:
        "Yes, all registered participants will receive the replay link after the live session so you can watch it anytime.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#07131f] text-white py-10 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
        Frequently Asked Questions!
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
              activeIndex === index
                ? "bg-yellow-400 text-black"
                : "bg-white text-gray-950"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full text-left px-4 sm:px-6 py-4 sm:py-5 font-semibold text-base sm:text-lg ${
                activeIndex === index ? "bg-cyan-400" : "bg-[rgb(244,237,237)]"
              }`}
            >
              <span className="leading-snug">{faq.question}</span>

              {/* ✅ Responsive, balanced icon sizes */}
              {activeIndex === index ? (
                <MinusCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-black flex-shrink-0 transition-all duration-200" />
              ) : (
                <PlusCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-black flex-shrink-0 transition-all duration-200" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-24 sm:max-h-96 bg-white"
                  : "max-h-0"
              }`}
            >
              <p className="px-4 sm:px-6 py-3 sm:py-5 text-sm sm:text-base text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
