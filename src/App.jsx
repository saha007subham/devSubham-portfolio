import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Components
import CustomCursor from "./components/CustomCursor";
import Navbar from "./layouts/Navbar";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Intro Cinematic Preloader
import { motion } from "framer-motion";

function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  React.useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      // Custom random increment sizes
      count += Math.floor(Math.random() * 8) + 2;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
      setPercent(count);
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-[#FAF9F6] flex flex-col items-center justify-center z-[99999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="flex flex-col items-start gap-1">
        {/* Cyber ticking beacon */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-ping" />
          <span className="text-[10px] font-black uppercase text-cyber-cyan tracking-widest leading-none">
            ENGINE INITIALIZATION
          </span>
        </div>

        {/* Counter readout */}
        <h1 className="text-7xl sm:text-9xl font-display font-extrabold text-slate-900 leading-none">
          {percent}%
        </h1>

        {/* Loading gauge */}
        <div className="w-56 sm:w-80 h-[2.5px] bg-slate-200/50 rounded-full overflow-hidden mt-4">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-violet origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: percent / 100 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4 }}>
      {/* Intro Preloader */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Global Interactive Cursor */}
      <CustomCursor />

      {/* Main Page Layout Wrapper */}
      <div className="relative min-h-screen w-full bg-brand-bg select-none overflow-x-hidden text-slate-800">
        {/* A. Fixed background noise layer */}
        <div className="fixed inset-0 w-full h-full noise-overlay opacity-100 z-[90] pointer-events-none" />

        {/* B. Fine technical grid overlay */}
        <div className="fixed inset-0 w-full h-full grid-bg-overlay opacity-[0.8] z-[1] pointer-events-none" />

        {/* D. Navbar */}
        <Navbar />

        {/* E. Sections Grid (relative z-10 for click interaction above Three.js background) */}
        <main className="relative z-10 w-full flex flex-col items-center">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </ReactLenis>
  );
}
