"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Project Manager",
    company: "ONEkpm Constructions",
    period: "2024 - Present",
    description:
      "Currently managing a single construction project. I handle salary distribution, materials purchasing, and on-site team management to keep the project running smoothly and on schedule.",
  },
  {
    title: "Full Stack Developer (Self-Employed)",
    company: "SDG Developments",
    period: "2023 - Present",
    description:
      "Building full-stack web apps for our construction company using Next.js, React, and Node.js. I handle both frontend and backend, making tools to help manage projects and daily operations more efficiently.",
  },
  {
    title: "Social Media Coordinator",
    company: "SDG Developments & ONEkpm Constructions",
    period: "2021 - Present",
    description:
      "Handled social media strategy and content creation for both companies. Managed multiple platforms to boost online presence, promote ongoing projects, and engage with the construction community.",
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2020 - 2021",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams in an agile environment.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-6"></div>

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
