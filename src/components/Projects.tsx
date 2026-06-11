"use client";

import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-slate-950 text-white py-20 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    Projects
                </motion.h2>

                {/* Professional Projects */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* MVPAY */}

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
              md:p-8
              hover:border-blue-500
              transition
            "
                    >
                        <h3 className="text-2xl md:text-3xl font-bold">
                            MVPay
                        </h3>

                        <p className="text-blue-400 mt-2 font-medium">
                            Multi Currency Digital Wallet
                        </p>

                        <p className="mt-5 text-slate-300 leading-8">
                            Built a configurable digital wallet platform supporting
                            multi-currency balances, automated liquidity management,
                            banking integrations and spending controls.
                        </p>

                        <ul className="mt-6 space-y-3 text-slate-300">
                            <li>• React Native wallet workflows</li>
                            <li>• Next.js Admin side workflows</li>
                            <li>• Multi-currency wallet management</li>
                            <li>• Banking & payment integrations</li>
                            <li>• Spending limit controls</li>
                            <li>• Auto top-up functionality</li>
                            <li>• Swift-based iOS application development</li>
                            <li>• App deployment & release management</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">Next.js</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">React Native</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">Django</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">Swift</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">REST APIs</span>
                        </div>

                    </motion.div>

                    {/* MVBOOKS */}

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
              md:p-8
              hover:border-green-500
              transition
            "
                    >
                        <h3 className="text-2xl md:text-3xl font-bold">
                            MVBooks
                        </h3>

                        <p className="text-green-400 mt-2 font-medium">
                            Edge Native Accounting Platform
                        </p>

                        <p className="mt-5 text-slate-300 leading-8">
                            Developed secure accounting and financial workflow systems
                            focused on reporting, reconciliation, audit trails, Sales , Purchases and book keeping
                            scalable backend architecture.
                        </p>

                        <ul className="mt-6 space-y-3 text-slate-300">
                            <li>• Python Django & Rust backend development</li>
                             <li>• Frontend React and Next.js</li>
                            <li>• Financial reporting workflows</li>
                             <li>• OCR Reconciliation completed inidiviual workflows</li>
                            <li>• PostgreSQL & CockroachDB</li>
                            <li>• Secure REST API development</li>
                            <li>• Cloud & Edge architecture contributions</li>
                            <li>• Performance optimization</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">React & Next.js</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">Python Django & Rust</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">Rest APIs</span>
                            <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">PostgreSQL</span>
                        </div>

                    </motion.div>

                </div>

                {/* Personal Projects */}

                <h3 className="text-3xl md:text-4xl font-bold mt-20 mb-10">
                    Personal Projects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {[
                        {
                            title: "ATS System",
                            desc: "Applicant Tracking System for recruitment workflow management.",
                            link: "https://github.com/Sathvik232/ATS-System",
                        },
                        {
                            title: "Weather Monitoring Server",
                            desc: "Backend monitoring service for processing weather data.",
                            link: "https://github.com/Sathvik232/weather-monitoring-server",
                        },
                        {
                            title: "Spring PetClinic",
                            desc: "Enterprise Java application built using Spring Boot.",
                            link: "https://github.com/Sathvik232/spring-petclinic",
                        },
                    ].map((project) => (
                        <motion.div
                            key={project.title}
                            whileHover={{ y: -5 }}
                            className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-blue-500
                transition
              "
                        >
                            <h4 className="text-xl font-bold">
                                {project.title}
                            </h4>

                            <p className="mt-4 text-slate-400 leading-7">
                                {project.desc}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 inline-block mt-5"
                            >
                                View Repository →
                            </a>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}