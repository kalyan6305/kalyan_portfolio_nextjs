"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    // Hide navbar on scroll down
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

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

    return (
        <>
            {/* NAVBAR */}
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-black/10"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="#home" onClick={(e) => handleScroll(e, "#home")}>
                        <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-black">
                            KALYAN NAGU
                        </h1>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="relative text-xs uppercase tracking-widest text-black after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black hover:after:w-full after:transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* RESUME */}
                        <Link href="https://drive.google.com/file/d/136oE60rOTl9wnxFN2fdPuKhda2KtWs_5/view" target="_blank">
                            <div className="ml-4 px-5 py-2 rounded-full border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition">
                                Get My Resume
                            </div>
                        </Link>

                        {/* SOCIALS */}
                        <div className="flex items-center gap-4 pl-4 border-l border-black">
                            <Link href="https://github.com/kalyan6305" target="_blank">
                                <FaGithub size={18} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/kalyannagu-pasupuleti-185223297/" target="_blank">
                                <FaLinkedin size={18} />
                            </Link>
                        </div>
                    </nav>

                    {/* MOBILE TOGGLE BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-black text-3xl leading-none"
                        aria-label="Toggle menu"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </motion.header>

            {/* MOBILE MENU OVERLAY */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed inset-0 z-40 bg-black text-white flex flex-col"
                >
                    {/* MENU ITEMS */}
                    <div className="flex flex-col items-center justify-center flex-1 gap-8 text-lg uppercase tracking-widest">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    setOpen(false);
                                    handleScroll(e, item.href);
                                }}
                                className="hover:opacity-70 transition"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* RESUME */}
                        <Link
                            href="https://drive.google.com/file/d/136oE60rOTl9wnxFN2fdPuKhda2KtWs_5/view?usp=sharing"
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className="mt-6 px-8 py-3 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
                        >
                            Get My Resume
                        </Link>

                        {/* SOCIALS */}
                        <div className="flex gap-6 mt-8">
                            <Link href="https://github.com/kalyan6305" target="_blank">
                                <FaGithub size={22} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/kalyannagu-pasupuleti-185223297/" target="_blank">
                                <FaLinkedin size={22} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
