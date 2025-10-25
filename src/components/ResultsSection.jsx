import React from "react";
import CTA from "./CTA";

const VideoCard = ({ title, imageUrl, videoUrl }) => {
  const TEAL_BRIGHT = "rgb(0, 201, 224)";
  const TEAL_DARK_BG = "rgba(3, 41, 47, 0.5)";

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden shadow-lg border-2 transition duration-300 transform hover:scale-[1.03] relative group"
      style={{ borderColor: TEAL_BRIGHT, backgroundColor: TEAL_DARK_BG }}
    >
      <div
        className="w-full h-36 sm:h-40 md:h-44 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white bg-red-600/80 rounded-full p-2 shadow-md transition duration-300 group-hover:bg-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 3l15 9-15 9V3z" />
          </svg>
        </div>
      </div>
    </a>
  );
};

const ResultsSection = () => {
  const GRAY_LIGHT_BG = "rgb(240, 240, 240)";

  const videoData = [
    {
      title: "Rajesh Sharma Interview",
      imageUrl: "https://placehold.co/600x400/104e73/ffffff?text=Video+1",
      videoUrl: "/images/vid1.mp4",
    },
    {
      title: "Team Success Collage",
      imageUrl: "https://placehold.co/600x400/296c6b/ffffff?text=Video+2",
      videoUrl: "/images/vid2.mp4",
    },
    {
      title: "Business on Automode",
      imageUrl: "https://placehold.co/600x400/5c3a8e/ffffff?text=Video+3",
      videoUrl: "/images/vid3.mp4",
    },
    {
      title: "Client Testimonials",
      imageUrl: "https://placehold.co/600x400/a35d10/ffffff?text=Video+4",
      videoUrl: "/images/vid4.mp4",
    },
  ];

  return (
    <section className=" bg-[#07131f] flex flex-col items-center justify-center py-16 px-6 sm:px-10 md:px-20 lg:px-28 font-sans text-gray-900">
      {/* Heading */}
      <h2 className="text-4xl sm:text-4xl font-bold text-center mb-3 text-sky-400">
        Proof That This Works
      </h2>
      <p className="text-gray-100 text-center text-lg font-semibold sm:text-lg mb-10 max-w-2xl">
        Real entrepreneurs. Real results. Real transformations. See how this
        framework has changed businesses like yours.
      </p>

      {/* Grid of Videos */}
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%]"
            >
              <VideoCard
                title={video.title}
                imageUrl={video.imageUrl}
                videoUrl={video.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>

      <CTA />

      {/* Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s ease-in-out infinite;
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

          @keyframes pulse-glow {
            0%, 100% { transform: scale(1); opacity: 0.35; }
            50% { transform: scale(1.15); opacity: 0.6; }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2.8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ResultsSection;
