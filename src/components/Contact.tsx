"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

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
            p-8
            md:p-12
            text-center
          "
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-8">
            I'm open to Full Stack Developer, React Native Developer,
            Software Engineer and Product Engineering opportunities.
            Feel free to connect with me.
          </p>

          <div className="mt-10 space-y-5">

            <a
              href="mailto:sathvikskashyap@gmail.com"
              className="
                flex
                justify-center
                items-center
                gap-3
                text-slate-300
                hover:text-blue-400
                transition
              "
            >
              <FaEnvelope />
              <span>sathvikskashyap111@gmail.com</span>
            </a>

            <div className="flex justify-center items-center gap-3 text-slate-300">
              <FaMapMarkerAlt />
              <span>Bengaluru, Karnataka, India</span>
            </div>

            <div className="flex justify-center items-center gap-3 text-slate-300">
              <FaPhoneAlt />
              <span>+91 8277325232</span>
            </div>

          </div>

          <div className="flex justify-center gap-8 mt-10">

            <a
              href="https://www.linkedin.com/in/sathvik-s-kashyap/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-blue-400
                hover:scale-110
                transition
              "
            >
              <FaLinkedin size={36} />
            </a>

            <a
              href="https://github.com/Sathvik232"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:scale-110
                transition
              "
            >
              <FaGithub size={36} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}