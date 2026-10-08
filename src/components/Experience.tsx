"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-black text-white py-20 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    Experience
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            md:p-10
            hover:border-blue-500
            transition
          "
                >

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Software Engineer
                            </h3>

                            <p className="text-blue-400 text-lg md:text-xl mt-2">
                                Gowdanar Technosoft Private Limited (GTPL)
                            </p>
                        </div>

                        <span className="bg-blue-600 px-5 py-2 rounded-full text-sm w-fit">
                            2023 - Present
                        </span>

                    </div>

                    <ul className="mt-8 space-y-4 text-slate-300 leading-8">
                        <li>
                            • Built scalable web applications using React.js and Next.js.
                        </li>
                        <li>
                            • Developed cross-platform mobile applications using React Native and Swift.
                        </li>
                        <li>
                            • Developed and integrated REST APIs with backend systems.
                        </li>

                        <li>
                            • Worked extensively with Django, PostgreSQL and CockroachDB.
                        </li>

                        <li>
                            • Contributed to fintech products including MVPay and MVBooks.
                        </li>

                        <li>
                            • Independently developed and deployed iOS applications.
                        </li>

                        <li>
                            • Improved application performance, maintainability and user experience.
                        </li>

                        <li>
                            • Collaborated with Product, QA and Engineering teams throughout SDLC.
                        </li>

                    </ul>

                </motion.div>

            </div>
        </section>
    );
}