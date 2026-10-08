"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-slate-300 leading-8">
              Software Engineer with 3+ years of professional
              experience building scalable web and mobile
              applications using React Native, React.js,
              Next.js, Python, Django and PostgreSQL.
            </p>

            <p className="text-base md:text-lg text-slate-300 leading-8 mt-6">
              Experienced in developing fintech and accounting
              platforms, designing REST APIs, implementing
              business workflows and delivering production-ready
              software solutions.
            </p>

            <p className="text-base md:text-lg text-slate-300 leading-8 mt-6">
              Strong understanding of frontend development,
              backend services, database design and mobile
              application deployment.
            </p>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                3+
              </h3>
              <p className="text-slate-300 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                5+
              </h3>
              <p className="text-slate-300 mt-2">
                Projects Delivered
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                React , ReactNative & IOS
              </h3>
              <p className="text-slate-300 mt-2">
                Frontend Development
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                Python(Django) & Java
              </h3>
              <p className="text-slate-300 mt-2">
                Backend Development
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}