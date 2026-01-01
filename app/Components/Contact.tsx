"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden px-2"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[22vw] md:text-[16vw] font-bold tracking-widest text-white/5">
          CONTACT
        </h1>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
        {/* HEADING */}
        <motion.div style={{ y: headingY }} className="mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/60 mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Let’s Build <br />
            <span className="text-white/60">Something Great</span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <motion.div style={{ y: contentY }} className="space-y-10 md:space-y-12">
          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed text-sm sm:text-base md:text-lg px-2">
            I’m currently looking for opportunities as a Full Stack / Frontend
            Developer. If you’re interested in my work or would like to
            collaborate, feel free to reach out.
          </p>

          {/* CONTACT ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="mailto:pasupuletikalyannagu@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-white text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              <FaEnvelope />
              Email Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/136oE60rOTl9wnxFN2fdPuKhda2KtWs_5/view"
              target="_blank"
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-white text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
            >
              Download Resume
            </Link>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 pt-8 text-xs sm:text-sm uppercase tracking-widest text-white/70">

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/kalyan6305"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaGithub size={16} />
                GitHub
              </Link>

              <span className="hidden sm:block h-4 w-px bg-white/30" />

              <Link
                href="https://www.linkedin.com/in/kalyannagu-pasupuleti-185223297/"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </Link>
            </div>

            {/* MOBILE DIVIDER */}
            <span className="block sm:hidden w-16 h-px bg-white/20" />

            <Link
              href="https://www.instagram.com/_kalyan_nagu"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaInstagram size={16} />
              Instagram
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
