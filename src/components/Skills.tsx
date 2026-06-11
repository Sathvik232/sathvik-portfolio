"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],

    Backend: [
      "Python",
      "Django",
      "Java",
      "REST APIs",
      "Authentication",
      "JWT",
      "Middleware",
    ],

    Database: [
      "PostgreSQL",
      "CockroachDB",
      "SQL",
      "MySQL",
      "Database Design",
    ],

    Mobile: [
      "React Native",
      "Swift",
      "iOS Deployment",
      "Android Builds",
    ],

    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Tauri",
      "Linux",
    ],
  };

  return (
    <section
      id="skills"
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
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-blue-500
              "
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-5 text-blue-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {items.map((item) => (
                  <span
                    key={item}
                    className="
                      bg-slate-800
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      md:text-base
                      text-slate-300
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}