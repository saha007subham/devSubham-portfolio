import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { menuItems, developerData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const logoRef = useRef(null);
  useMagnetic(logoRef, 0.25);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Setup intersection observer to track sections
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const el = document.getElementById(item.target);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="interactive-hover">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 font-display text-lg tracking-tight select-none"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-cyan to-cyber-violet flex items-center justify-center text-white shadow-glow-cyan">
                S
              </span>
              <span className="text-dark-gradient font-bold">Subham</span>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-navbar border border-white/50 shadow-glass">
            {menuItems.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 interactive-hover ${
                    isActive ? "text-cyber-dark" : "text-slate-500 hover:text-cyber-cyan"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/90 rounded-full z-[-1] shadow-glass-sm border border-slate-200/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Section: Socials & Availability */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-cyber-cyan hover:bg-white/40 transition-all duration-300 interactive-hover"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-cyber-cyan hover:bg-white/40 transition-all duration-300 interactive-hover"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
            
            <div className="h-5 w-[1px] bg-slate-200" />
            
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">
                Available
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/60 border border-slate-200/50 shadow-glass-sm text-slate-700 interactive-hover z-[110]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 bg-white/95 backdrop-blur-glass-lg border-b border-slate-200/60 z-[95] pt-24 pb-10 px-6 shadow-glass-lg md:hidden"
          >
            <div className="flex flex-col gap-4 mb-8">
              {menuItems.map((item, idx) => {
                const isActive = activeSection === item.target;
                return (
                  <motion.button
                    key={item.target}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => scrollToSection(item.target)}
                    className={`py-3 text-left font-display text-2xl border-b border-slate-100 ${
                      isActive ? "text-cyber-cyan font-bold" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex gap-4">
                <a href="https://github.com" className="text-slate-600 hover:text-cyber-cyan transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com" className="text-slate-600 hover:text-cyber-cyan transition-colors">
                  <LinkedinIcon size={20} />
                </a>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">
                  Available for hire
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
