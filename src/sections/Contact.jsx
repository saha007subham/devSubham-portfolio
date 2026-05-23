import { useRef, useState } from "react";

import { motion, useInView, AnimatePresence } from "framer-motion";

import {
  Send,
  GitBranch,
  ExternalLink,
  Mail,
  Code2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const socials = [
  {
    label: "LinkedIn",

    href: "https://linkedin.com/in/subhamsaha",

    icon: ExternalLink,

    color: "#0a66c2",

    bg: "rgba(10,102,194,0.1)",
  },

  {
    label: "GitHub",

    href: "https://github.com/subhamsaha",

    icon: GitBranch,

    color: "#e8eaf6",

    bg: "rgba(232,234,246,0.06)",
  },

  {
    label: "LeetCode",

    href: "https://leetcode.com/subhamsaha",

    icon: Code2,

    color: "#ffa116",

    bg: "rgba(255,161,22,0.1)",
  },

  {
    label: "Email",

    href: "mailto:subhamsaha@example.com",

    icon: Mail,

    color: "#38bdf8",

    bg: "rgba(56,189,248,0.1)",
  },
];

export default function Contact() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");

  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in all fields.");

      return;
    }

    setSending(true);

    setError("");

    await new Promise((r) => setTimeout(r, 1500));

    setSending(false);

    setSent(true);

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  const inputStyle = (field) => ({
    background:
      focused === field ? "rgba(56,189,248,0.05)" : "rgba(255,255,255,0.02)",

    border: `1px solid ${
      focused === field ? "rgba(56,189,248,0.4)" : "rgba(255,255,255,0.08)"
    }`,

    borderRadius: "0.875rem",

    padding: "0.875rem 1rem",

    width: "100%",

    color: "var(--color-text)",

    fontSize: "0.9rem",

    transition: "all 0.3s ease",

    outline: "none",
  });

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">06 — Contact</p>

          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",

              letterSpacing: "-0.03em",

              color: "var(--color-text)",
            }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </h2>

          <p
            className="max-w-xl mx-auto text-base"
            style={{
              color: "var(--color-muted)",

              lineHeight: "1.7",
            }}
          >
            I'm open to freelance projects, full-time positions, and exciting
            collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <h3
              className="font-bold text-2xl mb-3"
              style={{
                color: "var(--color-text)",
              }}
            >
              Open to Opportunities
            </h3>

            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "var(--color-muted)",

                lineHeight: "1.7",
              }}
            >
              Whether you have a project in mind or just want to connect — I'd
              love to hear from you.
            </p>

            {/* Skills */}
            <div className="space-y-3 mb-10">
              {[
                {
                  label: "Frontend Engineering",

                  value: "React, TypeScript, Redux",
                },

                {
                  label: "Performance Optimization",

                  value: "Core Web Vitals",
                },

                {
                  label: "AI Integration",

                  value: "LLM APIs",
                },

                {
                  label: "System Architecture",

                  value: "Scalable frontend design",
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{
                      background: "#38bdf8",
                    }}
                  />

                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      {label}
                    </div>

                    <div
                      className="text-xs"
                      style={{
                        color: "var(--color-muted)",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ label, href, icon: Icon, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                  style={{
                    background: bg,

                    border: `1px solid ${color}25`,

                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon
                    size={18}
                    style={{
                      color,
                    }}
                  />

                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: "var(--color-text)",
                    }}
                  >
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1,
            }}
          >
            <div
              className="p-8 rounded-3xl glass-card"
              style={{
                border: "1px solid rgba(56,189,248,0.12)",

                boxShadow: "0 0 60px rgba(56,189,248,0.05)",
              }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2
                      size={56}
                      style={{
                        color: "#10b981",
                      }}
                    />

                    <h3
                      className="font-bold text-xl mt-5 mb-2"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      Message Sent!
                    </h3>

                    <p
                      className="text-sm"
                      style={{
                        color: "var(--color-muted)",
                      }}
                    >
                      I'll get back to you within 24 hours.
                    </p>

                    <motion.button
                      onClick={() => setSent(false)}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="mt-8 px-6 py-2.5 rounded-full text-sm font-semibold"
                      style={{
                        background: "linear-gradient(135deg, #38bdf8, #22d3ee)",

                        color: "#020408",
                      }}
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        className="block text-xs mb-2"
                        style={{
                          color: "var(--color-muted)",

                          letterSpacing: "0.1em",
                        }}
                      >
                        YOUR NAME
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            name: e.target.value,
                          }))
                        }
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("name")}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-xs mb-2"
                        style={{
                          color: "var(--color-muted)",

                          letterSpacing: "0.1em",
                        }}
                      >
                        EMAIL ADDRESS
                      </label>

                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            email: e.target.value,
                          }))
                        }
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("email")}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-xs mb-2"
                        style={{
                          color: "var(--color-muted)",

                          letterSpacing: "0.1em",
                        }}
                      >
                        MESSAGE
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            message: e.target.value,
                          }))
                        }
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle("message"),

                          resize: "none",
                        }}
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <div
                        className="flex items-center gap-2 text-sm"
                        style={{
                          color: "#fb7185",
                        }}
                      >
                        <AlertCircle size={15} />

                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{
                        scale: 1.02,

                        boxShadow: "0 0 30px rgba(56,189,248,0.4)",
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm"
                      style={{
                        background: sending
                          ? "rgba(56,189,248,0.3)"
                          : "linear-gradient(135deg, #38bdf8, #22d3ee)",

                        color: "#020408",

                        transition: "all 0.3s ease",
                      }}
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
