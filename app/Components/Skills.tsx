"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiSupabase,
  SiPostman,
  SiMysql,
  SiSwagger,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <FaReact /> },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "SWAGER API", icon: <SiSwagger /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Postmon", icon: <SiPostman /> },
      { name: "SQL ", icon: <SiMysql /> },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <FaDatabase /> },
      { name: "JavaScript", icon: <FaJs /> },
      // { name: "C++", icon: <FaC /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscCode /> },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion
  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const gridY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-screen bg-white text-black flex items-center overflow-hidden"
    >
      {/* BACKGROUND TEXT */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[18vw] font-bold tracking-widest text-black/5">
          SKILLS
        </h1>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* HEADING */}
        <motion.div style={{ y: headingY }} className="mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60 mb-6">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Technologies & <br />
            <span className="text-black/60">Tools I Work With</span>
          </h2>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          style={{ y: gridY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-black/10 rounded-2xl p-8 hover:border-black transition-all"
            >
              <h3 className="text-lg font-semibold tracking-widest uppercase mb-8">
                {group.title}
              </h3>

              <ul className="grid grid-cols-2 gap-5">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group flex items-center gap-4 text-sm tracking-widest text-black/70 hover:text-black transition"
                  >
                    <span className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
