"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiDocker,
  SiAmazon,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiFigma
} from "react-icons/si";

type Skill = {
  name: string;
  level: string;
  icon: React.ReactNode;
};

type SkillGroup = {
  category: string;
  color: string;
  items: Skill[];
};

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20",
    items: [
      { name: "HTML5", level: "Intermediate", icon: <SiHtml5 /> },
      { name: "CSS3", level: "Intermediate", icon: <SiCss3 /> },
      { name: "JavaScript", level: "Intermediate", icon: <SiJavascript /> },
      {
        name: "React/Next.js",
        level: "Intermediate",
        icon: (
          <span className="flex items-center gap-1">
            <SiReact className="text-black dark:text-white" />
            <SiNextdotjs className="text-black dark:text-white" />
          </span>
        ),
      },
      { name: "TypeScript", level: "Intermediate", icon: <SiTypescript /> },
      { name: "TailwindCSS", level: "Intermediate", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500/20 to-emerald-500/20",
    items: [
      { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
      { name: "Python", level: "Intermediate", icon: <SiPython /> },
      { name: "PHP", level: "Intermediate", icon: <SiPhp /> },
      { name: "Prisma", level: "Intermediate", icon: <SiPrisma /> },
      { name: "APIs", level: "Intermediate", icon: <SiPostman /> },
    ],
  },
  {
    category: "Database",
    color: "from-purple-500/20 to-pink-500/20",
    items: [
      { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql /> },
      { name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
      { name: "Redis", level: "Intermediate", icon: <SiRedis /> },
      { name: "Supabase", level: "Intermediate", icon: <SiSupabase /> },
      { name: "Neon", level: "Intermediate", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Tools",
    color: "from-orange-500/20 to-red-500/20",
    items: [
      { name: "Git", level: "Intermediate", icon: <SiGit /> },
      { name: "Docker", level: "Intermediate", icon: <SiDocker /> },
      { name: "AWS", level: "Intermediate", icon: <SiAmazon /> },
      { name: "Vercel", level: "Intermediate", icon: <SiVercel /> },
      { name: "Figma", level: "Intermediate", icon: <SiFigma /> },
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={item}
              className="relative p-6 rounded-2xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-50`} />
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {skillGroup.items.map((skill) => (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="text-3xl mb-3">{skill.icon}</div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white text-center">
                              {skill.name}
                            </div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{skill.level}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
