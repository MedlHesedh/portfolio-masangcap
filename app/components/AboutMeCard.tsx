"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  "React/Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "TailwindCSS",
  "PostgreSQL",
];

export default function AboutMeCard() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/40 rounded-3xl transform -rotate-6"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-200 dark:border-blue-800">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a versatile Full Stack Developer and Project Manager with experience
              in both software development and construction project management. This
              unique combination allows me to bridge technical solutions with
              practical, real-world applications.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interests
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond coding, I'm passionate about solving complex problems,
                continuous learning, and implementing efficient solutions that make
                a real impact in both the digital and physical world.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
