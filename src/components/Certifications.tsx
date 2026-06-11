"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Kodnest",
      description:
        "Comprehensive training in Java, Spring Boot, SQL, JDBC, Servlets and Full Stack Development.",
    },
    {
      title: "Selenium WeDriver with Java",
      issuer: "Rahul shetty Academy (Udemy)",
      description:
        "Automation testing using Selenium WebDriver, TestNG and testing frameworks.",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-black text-white py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                borderColor: "#3b82f6",
              }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                transition
              "
            >
              <div className="flex justify-between items-start mb-4">

                <h3 className="text-xl md:text-2xl font-bold">
                  {cert.title}
                </h3>

                <span
                  className="
                    bg-blue-500/10
                    text-blue-400
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  Certified
                </span>

              </div>

              <p className="text-blue-400 font-medium">
                {cert.issuer}
              </p>

              <p className="text-slate-400 mt-4 leading-7">
                {cert.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}