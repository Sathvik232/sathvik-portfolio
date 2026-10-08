"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="
min-h-screen
bg-slate-950
text-white
flex
items-center
pt-24
pb-12
"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 w-full">

                <div className="
grid
grid-cols-1
lg:grid-cols-[60%_40%]
gap-10
lg:gap-16
items-center
">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-blue-400 uppercase tracking-[0.25em] font-semibold mb-5">
                            Software Engineer • Full Stack Developer
                        </p>

                        <h1 className="
text-4xl
sm:text-5xl
md:text-6xl
font-bold
leading-tight
">
                            Sathvik S Kashyap
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mt-5">
                            Bengaluru, Karnataka
                        </p>

                        <p className="mt-8 text-base md:text-lg text-slate-400 leading-8 max-w-3xl">
                            Software Engineer with 3+ years of experience
                            building scalable web and mobile applications
                            using React.js, Next.js,React Native, Python
                            Django, Java, PostgreSQL, CockroachDB and Swift.

                            Experienced in developing fintech products,
                            REST APIs, mobile deployments and
                            performance-focused solutions.
                        </p>

                        {/* TECH STACK */}

                        <div className="flex flex-wrap gap-3 mt-8">

                            {[
                                "Javascript",
                                "React.js",
                                "Next.js",
                                "React Native",
                                "Python",
                                "Django",
                                "Java",
                                "PostgreSQL",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="
bg-slate-800
px-3
py-2
rounded-full
text-xs
md:text-sm
text-slate-300
"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                        {/* BUTTONS */}

                        <div className="
flex
flex-wrap
gap-3
mt-8
">

                            <a
                                href={portfolio.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl flex items-center gap-3"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </a>

                            <a
                                href={portfolio.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-slate-700 hover:bg-slate-800 transition px-5 py-3 rounded-xl flex items-center gap-3"
                            >
                                <FaGithub />
                                GitHub
                            </a>

                            <a
                                href="/resume/Sathvik_s_kashyap_resume.pdf"
                                target="_blank"
                                className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl flex items-center gap-3"
                            >
                                <FaDownload />
                                Resume
                            </a>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="
flex
justify-center
order-first
lg:order-last
"

                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image
                            src="/profile.jpeg"
                            alt="Sathvik S Kashyap"
                            width={240}
                            height={300}
                            priority
                            className="
    rounded-3xl
    object-cover
    border
    border-slate-700
    shadow-2xl
  "
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}