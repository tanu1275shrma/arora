import React from "react";
import Hero from "./components/Hero";
import Learn from "./components/Learn";
import StuckSection from "./components/StuckSession";
import ResultsSection from "./components/ResultsSection";
import CoachSection from "./components/CoachSection";
import Bonus from "./components/Bonus";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <>
      <Hero />
      <Learn />
      <StuckSection />
      <ResultsSection />
      <CoachSection />
      <Bonus />
      <FAQ />
    </>
  );
};

export default App;
