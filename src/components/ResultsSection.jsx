import React, { useRef, useState } from "react";

const testimonials = [
  { video: "/images/vid1.mp4" },
  { video: "/images/vid2.mp4" },
  { video: "/images/vid3.mp4" },
  { video: "/images/vid4.mp4" },
  { video: "/images/vid5.mp4" },
  { video: "/images/vid6.mp4" },
];

const Testimonials = () => {
  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlay = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play or pause clicked video
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      if (activeVideo === index) {
        currentVideo.pause();
        setActiveVideo(null);
      } else {
        currentVideo.muted = false; // ✅ Enable sound
        currentVideo.play();
        setActiveVideo(index);
      }
    }
  };

  return (
    <section className="bg-[#031220] min-h-screen flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Customer Testimonials
      </h2>

      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 w-full max-w-6xl">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#02101D] border border-teal-400 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            onClick={() => handlePlay(index)}
          >
            {/* ✅ Only cropped center part visible */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "230px" }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                className="w-full object-cover"
                style={{ objectPosition: "center center", height: "100%" }}
                playsInline
                controls={activeVideo === index} // ✅ show controls when playing
              />
              {/* Play Icon Overlay */}
              {activeVideo !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button className="bg-transparent text-black font-bold text-lg rounded-full px-4 py-2">
                    ▶
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
