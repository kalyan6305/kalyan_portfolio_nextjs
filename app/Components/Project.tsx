"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Campus Energy Audit & Action Plan",
    tech: "Python",
    image: "/image.png",
    github: "https://github.com/kalyan6305/Tree_classification",
    live: "https://evovisionkalyan.streamlit.app/",
    description:
      "A sustainability-focused web application that enables educational campuses to analyze, monitor, and optimize energy consumption using real-time and historical data. Built with Python and Streamlit, the platform performs digital energy audits, generates automated reports, and provides actionable energy-saving recommendations, supporting SDG 7, SDG 12, and SDG 13",
  },
  {
    title: "Digital Financial AI",
    tech: "PYTHON",
    image: "/ai.png",
    github: "https://github.com/kalyan6305/digital-financial-ai/tree/main",
    live: "#",
    description:
      "An AI-powered multilingual assistant built using IBM Cloud Lite, IBM Watson Discovery, and IBM Granite (Watsonx), designed to educate users on digital financial tools like UPI, interest rates, personal finance, digital scams, and more.",
  },
  {
    title: "Water-Quality-Prediction",
    tech: "Machine-Learning",
    image: "/waterquality.jpg",
    github: "https://github.com/kalyan6305/Water-Quality-Prediction-using-Machine-Learning",
    live: "#",
    description:
      "A machine learning–based application that predicts water quality and potability by analyzing physicochemical parameters such as pH, turbidity, hardness, and dissolved solids. Built using Machine Learning techniques in Python, the system supports early detection of water contamination and assists in data-driven environmental and public health decision-making. ",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative min-h-screen bg-white text-black flex items-center overflow-hidden px-2"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[26vw] sm:text-[20vw] md:text-[18vw] font-bold tracking-widest text-black/5">
          PROJECTS
        </h1>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* HEADING */}
        <motion.div style={{ y: headingY }} className="mb-14 sm:mb-16 md:mb-20">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-black/60 mb-4 sm:mb-6">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Selected <br />
            <span className="text-black/60">Projects</span>
          </h2>
        </motion.div>

        {/* PROJECT CARDS */}
        <motion.div
          style={{ y: cardsY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white border border-black/10 hover:border-black transition-all rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold tracking-widest uppercase mb-2">
                  {project.title}
                </h3>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-black/50 mb-4">
                  {project.tech}
                </p>

                <p className="text-sm leading-relaxed text-black/70 mb-6">
                  {project.description}
                </p>

                {/* ACTIONS */}
                <div className="flex items-center gap-6">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-black/70 hover:text-black transition"
                  >
                    <FaGithub size={18} />
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest border-b border-black/30 hover:border-black transition"
                  >
                    Live Demo <FaExternalLinkAlt size={10} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
