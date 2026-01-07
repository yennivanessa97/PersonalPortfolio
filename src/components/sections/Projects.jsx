export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-3xl font-bold mb-10 text-center
                     bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_20px_rgba(192,132,252,0.25)]"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Cloud Platform",
              desc:
                "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
              tech: ["React", "Node.js", "AWS", "Docker"],
            },
            {
              title: "AI Analytics Dashboard",
              desc:
                "Data visualization platform with predictive analytics and interactive reports.",
              tech: ["Python", "TensorFlow", "D3.js", "Flask"],
            },
            {
              title: "E-Commerce Web App",
              desc:
                "Full-stack e-commerce application with modern UI and secure payment integration.",
              tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            },
            {
              title: "Real-Time Chat App",
              desc:
                "Chat platform supporting real-time messaging, presence, and group conversations.",
              tech: ["Socket.IO", "Express", "React", "Redis"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10
                         bg-white/5 backdrop-blur
                         hover:-translate-y-1
                         hover:border-[#C084FC]/40
                         hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                         transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#5315C0]/15 text-[#C084FC]
                               py-1 px-3 rounded-full text-sm
                               hover:bg-[#5315C0]/30
                               hover:shadow-[0_0_12px_rgba(192,132,252,0.35)]
                               transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="text-[#C084FC] hover:text-[#E9D5FF]
                           transition-colors font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
