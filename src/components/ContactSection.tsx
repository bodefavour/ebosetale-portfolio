import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaInstagram />, url: "https://instagram.com/okhueileigbe" },
  { icon: <FaTwitter />, url: "https://twitter.com/okhueileigbe" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/okhueileigbe" },
  { icon: <FaFacebook />, url: "https://facebook.com/okhueileigbe" },
  { icon: <FaEnvelope />, url: "mailto:contact@okhueileigbe.com" },
];

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#121214] text-gray-300 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-8">
        Get In Touch
      </h2>
      <p className="mb-8 max-w-xl mx-auto">
        Feel free to reach out through any of the platforms below for collaborations, speaking engagements, or inquiries.
      </p>
      <div className="flex justify-center gap-10 text-4xl md:text-5xl text-yellow-400">
        {socials.map(({ icon, url }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#f59e0b" }}
            whileTap={{ scale: 0.95 }}
            className="transition-colors"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};