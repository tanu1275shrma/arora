import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Learn from "./components/Learn";
import StuckSection from "./components/StuckSession";
import ResultsSection from "./components/ResultsSection";
import CoachSection from "./components/CoachSection";
import Bonus from "./components/Bonus";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

const App = () => {
  useEffect(() => {
    // --- Facebook Pixel Code ---
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "1488727148819234");
    window.fbq("track", "PageView");
  }, []);

  return (
    <>
      <Hero />
      <Learn />
      <StuckSection />
      <ResultsSection />
      <CoachSection />
      <Bonus />
      <FAQ />
      <CTA />

      {/* NoScript fallback (for users with JS disabled) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1488727148819234&ev=PageView&noscript=1"
          alt="fb pixel"
        />
      </noscript>
    </>
  );
};

export default App;
