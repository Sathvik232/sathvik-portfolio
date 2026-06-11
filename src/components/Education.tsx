"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-xl">
              <FaGraduationCap size={24} />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Bachelor of Engineering
              </h3>

              <p className="text-blue-400 text-lg md:text-xl mt-1">
                Mechanical Engineering
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-base md:text-lg">
            Malnad college of Engineering (MCE)
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl">
              <FaCalendarAlt className="text-blue-400" />
              <span>2018 - 2022</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Hassan, Karnataka</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}