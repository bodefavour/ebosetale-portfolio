import React, { useState } from "react";
import { motion } from "framer-motion";

type Achievement = {
  year: string;
  title: string;
  description: string;
};

const achievements: Achievement[] = [
  {
    year: "2014",
    title: "Miss ITV Hot Legs Winner",
    description: "Won the prestigious beauty pageant that propelled her modeling career.",
  },
  {
    year: "2016",
    title: "Face of Afriwomen Magazine",
    description: "Featured as the cover face highlighting African women's empowerment.",
  },
  {
    year: "2018",
    title: "Harvard Degree Graduate",
    description: "Graduated with a degree from Harvard University in Business Administration.",
  },
  {
    year: "2020",
    title: "Golf Champion",
    description: "Won several national and international golf tournaments.",
  },
  {
    year: "2022",
    title: "Philanthropy Award",
    description: "Recognized for impactful charitable work with Stella Whyte Foundation.",
  },
];

type Certification = {
  name: string;
  issuer: string;
  year: string;
  description: string;
};

const certifications: Certification[] = [
  {
    name: "Business Administration Degree",
    issuer: "Harvard University",
    year: "2018",
    description: "Completed a rigorous business degree focusing on leadership and management.",
  },
  {
    name: "Word of Faith Bible Institute Diploma",
    issuer: "Word of Faith Bible Institute",
    year: "2013",
    description: "Diploma in Biblical Studies and Theology.",
  },
  {
    name: "Certified Golf Professional",
    issuer: "Professional Golfers Association",
    year: "2019",
    description: "Professional certification in golf training and competitions.",
  },
];

export const AchievementsTimeline: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#121214] text-gray-300">
      <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-12 text-center">
        Achievements
      </h2>
      <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-4 before:h-full before:w-1 before:bg-yellow-400">
        {achievements.map(({ year, title, description }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative mb-12 pl-12"
          >
            <div className="absolute -left-7 top-1 w-6 h-6 rounded-full bg-yellow-400 border-4 border-[#121214]" />
            <time className="font-semibold text-yellow-400">{year}</time>
            <h3 className="text-xl font-semibold mt-1">{title}</h3>
            <p className="text-gray-400 mt-1">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const CertificationsGrid: React.FC = () => {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section className="py-16 px-6 md:px-20 bg-[#0e0e10] text-gray-300">
      <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-12 text-center">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(cert)}
            className="bg-gray-900 rounded-lg p-6 cursor-pointer hover:bg-yellow-900 transition shadow-lg"
          >
            <h3 className="font-semibold text-lg text-yellow-400">{cert.name}</h3>
            <p className="text-gray-400 mt-1">{cert.issuer}</p>
            <p className="text-gray-500 mt-1 text-sm">{cert.year}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-6 z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121214] rounded-lg p-8 max-w-xl w-full shadow-lg text-gray-300"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{selected.name}</h3>
            <p className="mb-2">{selected.description}</p>
            <p className="italic text-gray-400">{selected.issuer} - {selected.year}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};