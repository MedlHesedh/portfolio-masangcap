"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React/Next.js", level: "Advanced", icon: "📱" },
      { name: "TypeScript", level: "Advanced", icon: "⚡" },
      { name: "TailwindCSS", level: "Advanced", icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Advanced", icon: "🚀" },
      { name: "Python", level: "Intermediate", icon: "🐍" },
      { name: "APIs", level: "Advanced", icon: "🔌" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: "Advanced", icon: "🗃️" },
      { name: "MongoDB", level: "Intermediate", icon: "🍃" },
      { name: "Redis", level: "Intermediate", icon: "⚡" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Advanced", icon: "📝" },
      { name: "Docker", level: "Intermediate", icon: "🐳" },
      { name: "AWS", level: "Intermediate", icon: "☁️" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={item}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
                        >
                          <div className="text-2xl mb-2">{skill.icon}</div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.level}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
