"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const fadeIn = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-white text-black flex items-center overflow-hidden"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{ opacity: fadeIn }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[18vw] font-bold tracking-widest text-black/5">
          ABOUT
        </h1>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT – TITLE */}
        <motion.div style={{ y: headingY }}>
          <p className="text-xs uppercase tracking-[0.4em] text-black mb-6">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Building clean, scalable <br />
            <span className="text-black">digital experiences.</span>
          </h2>
        </motion.div>

        {/* RIGHT – DESCRIPTION */}
        <motion.div style={{ y: textY }} className="space-y-6 text-black/70">
          <p className="leading-relaxed">
            I’m a Artificial Intelligence & Data Science graduate with a strong
            foundation in full-stack development and machine learning.
            I specialize in building scalable web and mobile applications
            using the MERN stack, React, and modern JavaScript frameworks.
          </p>

          <p className="leading-relaxed">
            During my internship at IIIT-Hyderabad, I worked on real-world
            machine learning problems, training regression models on
            large-scale datasets and improving accuracy through effective
            preprocessing and feature engineering.
          </p>

          <p className="leading-relaxed">
            I enjoy transforming complex requirements into intuitive user
            experiences, focusing on clean UI, performance optimization,
            and maintainable architecture.
          </p>

          {/* STATS */}
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-black/10">
            <div>
              <h3 className="text-2xl font-semibold text-black">5+</h3>
              <p className="text-xs uppercase tracking-widest text-black/50">
                Projects Completed
              </p>
            </div>
            {/* <div>
              <h3 className="text-2xl font-semibold text-white">50K+</h3>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Data Records
              </p>
            </div> */}
            <div>
              <h3 className="text-2xl font-semibold text-black">7.72</h3>
              <p className="text-xs uppercase tracking-widest text-black/50">
                CGPA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
