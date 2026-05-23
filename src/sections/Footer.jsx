import React, { useRef } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { developerData } from "../data/portfolioData";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Footer() {
  // Magnetic scroll to top btn
  const topBtnRef = useRef(null);
  useMagnetic(topBtnRef, 0.3);

  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-slate-900/5 py-12 bg-transparent z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Signature Logo */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-gradient-to-tr from-cyber-cyan to-cyber-violet flex items-center justify-center text-white text-[10px] font-black shadow-glow-cyan">
            S
          </span>
          <span className="text-xs font-bold text-slate-800 tracking-tight">
            Subham Saha &copy; {new Date().getFullYear()}
          </span>
        </div>

        {/* Dynamic availability tag */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full">
          <Sparkles size={10} className="text-cyber-cyan animate-spin-slow" />
          <span className="text-[8px] font-extrabold tracking-widest text-cyber-cyan uppercase">
            Built with React, Fiber & Framer
          </span>
        </div>

        {/* Back To Top & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyber-cyan transition-colors text-xs font-semibold uppercase tracking-wider interactive-hover">
              Github
            </a>
            <span className="text-slate-200">/</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyber-cyan transition-colors text-xs font-semibold uppercase tracking-wider interactive-hover">
              Linkedin
            </a>
          </div>

          <div ref={topBtnRef} className="interactive-hover">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-slate-200/60 bg-white/60 flex items-center justify-center text-slate-600 hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all duration-300 shadow-glass-sm"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
