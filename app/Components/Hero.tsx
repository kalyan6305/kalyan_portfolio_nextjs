"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    // @ts-ignore
    const lenis = window.lenis;

    if (elem) {
      if (lenis) {
        lenis.scrollTo(elem, { duration: 1.5 });
      } else {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen bg-white text-black overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-white" />

      {/* CONTENT WRAPPER */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">

          {/* LEFT – TEXT */}
          <div className="text-center md:text-left">
            <motion.h1
              style={{ y: titleY }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[0.15em] sm:tracking-[0.2em]"
            >
              KALYAN 
            </motion.h1>

            <motion.p
              style={{ y: subtitleY }}
              className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.18em]"
            >
              Full Stack Developer · MERN · React · NEXTJS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 sm:mt-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base md:text-lg"
            >
              Artificial Intelligence & Data Science graduate with hands-on experience
              building scalable MERN applications, React Native mobile apps, and
              machine learning solutions. Passionate about clean UI, performance,
              and real-world impact.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6"
            >
              <Link
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-black text-xs sm:text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center"
              >
                View Projects
              </Link>

              <Link
                href="https://drive.google.com/file/d/136oE60rOTl9wnxFN2fdPuKhda2KtWs_5/view?usp=sharing"
                target="_blank"
                className="w-full sm:w-auto px-8 py-3 rounded-full text-xs sm:text-sm uppercase tracking-widest bg-white text-black border border-black hover:bg-black hover:text-white transition-all text-center"
              >
                Get My Resume
              </Link>
            </motion.div>
          </div>

          {/* RIGHT – IMAGE */}
          <motion.div
            style={{ y: imageY }}
            className="flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full overflow-hidden">
              <Image
                src="/kalyan01.jpeg"
                alt="Gowtham Profile"
                width={300}
                height={300}
                className="object-cover grayscale"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-black/50 text-[10px] sm:text-xs tracking-widest"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
