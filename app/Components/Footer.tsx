"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const name = "KALYAN NAGU";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-16 pt-20 md:pt-24 pb-10 overflow-hidden">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        {/* LEFT BIG CTA */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight max-w-xl text-[#e6c9ff]">
            LET’S EXPLORE HOW WE <br />
            CAN HELP YOU ACHIEVE <br />
            YOUR GOALS
          </h2>
        </div>

        {/* RIGHT LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-sm">
          {/* NAV */}
          <div className="space-y-3">
            <p className="uppercase text-white/40 tracking-widest text-xs">
              Navigation
            </p>
            <ul className="space-y-2 text-white/80">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-3">
            <p className="uppercase text-white/40 tracking-widest text-xs">
              Social
            </p>
            <div className="flex gap-6 text-white/80">
              <a href="https://www.linkedin.com/in/kalyannagu-pasupuleti-185223297/" target="_blank">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/kalyan6305" target="_blank">
                <FaGithub size={20} />
              </a>
              <a href="https://www.instagram.com/_kalyan_nagu" target="_blank">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <p className="uppercase text-white/40 tracking-widest text-xs">
              Contact
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="break-all">pasupuletikalyannagu@gmail.com</li>
              <li>+91 6305030599</li>
              <li>India, Andhra Pradesh, PIDUGURALLA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-12 md:my-16 h-px bg-white/10" />

      {/* BOTTOM */}
      <div className="text-xs text-white/50 text-center md:text-left">
        © {new Date().getFullYear()} PASUPELTI KALYAN NAGU. All rights reserved.
      </div>

      {/* HUGE BRAND TEXT — MOBILE FIXED */}
      <div className="mt-8 md:mt-16 overflow-hidden">
        <h1
          className="flex flex-wrap justify-center md:justify-start text-[14vw] sm:text-[18vw] md:text-[13vw] leading-none font-bold tracking-tight sm:tracking-tight md:tracking-tight text-[#e6c9ff]"
        >
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block px-1 sm:px-0 transition-transform duration-300 ease-out hover:-translate-y-3 md:hover:-translate-y-6 hover:scale-110 cursor-default"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </footer>
  );
}
