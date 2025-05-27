"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  size?: "large" | "medium" | "small";
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  size = "medium",
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
        size === "large"
          ? "md:col-span-2 md:row-span-2"
          : size === "small"
          ? ""
          : "md:col-span-1 md:row-span-1"
      }`}
    >
      <div
        className={`relative ${
          size === "large"
            ? "h-72"
            : size === "small"
            ? "h-32"
            : "h-48"
        } overflow-hidden`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3
          className={`font-bold text-gray-900 dark:text-white mb-2 ${
            size === "large"
              ? "text-2xl"
              : size === "small"
              ? "text-lg"
              : "text-xl"
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Globe size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Projects section that uses ProjectCard
export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and TailwindCSS",
      image: "/like-no-other.jpg",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/portfolio",
      demoUrl: "https://portfolio.yourdomain.com",
    },
    {
      title: "Project Management App",
      description: "Full-stack project management application with real-time updates",
      image: "/like-no-other.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com/yourusername/project-management",
      demoUrl: "https://demo.yourdomain.com",
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with advanced features",
      image: "/like-no-other.jpg",
      tags: ["Next.js", "Stripe", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      demoUrl: "https://shop.yourdomain.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
