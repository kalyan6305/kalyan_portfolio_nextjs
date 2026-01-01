"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "ML Intern",
    company: "IIIT Hyderabad",
    duration: "Aug 2023 – May 2024",
    points: [
      "Trained regression models and Datasets achieving 88% accuracy.",
      "Improved model performance by 12% through preprocessing and feature engineering.",
      "Worked on real-world datasets with a focus on scalability and accuracy.",
    ],
  },
];



export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      id="experience"
      className="relative min-h-screen bg-white text-black flex items-center overflow-hidden"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[14vw] font-bold tracking-widest text-black/5">
          EXPERIENCE
        </h1>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* HEADING */}
        <motion.div style={{ y: headingY }} className="mb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60 mb-6">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Professional <br />
            <span className="text-black/60">Experience</span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <motion.div style={{ y: timelineY }} className="relative pl-8">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-black/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-20 pl-10"
            >
              {/* DOT */}
              <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-black" />

              <h3 className="text-xl font-semibold tracking-widest uppercase">
                {exp.role}
              </h3>

              <p className="text-sm tracking-widest uppercase text-black/60 mt-1">
                {exp.company}
              </p>

              <p className="text-xs tracking-widest uppercase text-black/40 mt-2 mb-6">
                {exp.duration}
              </p>

              <ul className="space-y-3 text-black/70 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>— {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
