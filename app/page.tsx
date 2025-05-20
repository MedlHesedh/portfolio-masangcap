import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
            Full Stack Developer | Creating Digital Experiences
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-sky-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                I love creating innovative solutions and bringing ideas to life through code.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                My journey in tech has equipped me with a strong foundation in both frontend
                and backend development, allowing me to build complete, scalable applications.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800 dark:text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-sky-100 dark:border-slate-700">
                <div className="h-48 bg-sky-100 dark:bg-slate-700" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Project {project}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <a 
                    href="#" 
                    className="text-sky-500 hover:text-sky-600 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-sky-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Frontend', 'Backend', 'Database', 'DevOps'].map((category) => (
              <div key={category} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <span className="text-2xl text-sky-500 dark:text-sky-400">•</span>
                </div>
                <h3 className="font-semibold mb-2 text-slate-800 dark:text-white">{category}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Various {category.toLowerCase()} technologies
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-white">Let's Connect</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
