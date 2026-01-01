"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    title: "ML Intern – IIIT Hyderabad",
    description:
      "Selected for a competitive research internship, working on large-scale machine learning datasets and real-world problems.",
  },
  {
    title: "K-HUB Member",
    description:
      "Active member of K-HUB, contributing to collaborative coding initiatives and technical learning activities.",
  },
  {
    title: "HACKTHON WINNER",
    description:
      " Won a hackathon for developing a platform that supported learning and placement preparation for over 500 students.",
  },
];

export default function Achievement() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax (softened for mobile)
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      id="achievements"
      className="relative min-h-screen bg-white text-black flex items-center overflow-hidden px-2"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="hidden sm:block text-[18vw] font-bold tracking-widest text-black/5">
          ACHIEVEMENTS
        </h1>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* HEADING */}
        <motion.div style={{ y: headingY }} className="mb-16 sm:mb-20 md:mb-24">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-black/60 mb-4 sm:mb-6">
            Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Achievements & <br />
            <span className="text-black/60">Recognition</span>
          </h2>
        </motion.div>

        {/* ACHIEVEMENT CARDS */}
        <motion.div
          style={{ y: cardsY }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 md:gap-12"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-black/10 p-6 sm:p-8 md:p-10 hover:border-black hover:shadow-sm transition-all"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-widest uppercase mb-3 sm:mb-4">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-black/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
