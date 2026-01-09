import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  const systemsSkills = [
  "Ubuntu (Server & Client)",
  "VirtualBox",
  "Linux System Configuration",
  "Basic Network Setup",
];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-3xl font-bold mb-10 text-center
                     bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_20px_rgba(192,132,252,0.25)]"
        >
          About Me
        </h2>

        {/* Main card */}
        <div className="rounded-xl p-8 border border-white/10
                        bg-white/5 backdrop-blur
                        hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            Software and Data Engineering student with a strong interest in
            Agile environments, product-oriented thinking, and data-driven
            decision-making. My background in psychology strengthens my ability
            to collaborate, analyze problems, and support effective team work.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
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
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
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
            </div>
            {/* Systems & Virtualization */}
<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4 text-white">
    Systems & Virtualization
  </h3>
  <div className="flex flex-wrap gap-2">
    {systemsSkills.map((skill, key) => (
      <span
        key={key}
        className="bg-[#5315C0]/15 text-[#C084FC]
                   py-1 px-3 rounded-full text-sm
                   hover:bg-[#5315C0]/30
                   hover:shadow-[0_0_12px_rgba(192,132,252,0.35)]
                   transition"
      >
        {skill}
      </span>
    ))}
  </div>
</div>

            
          </div>
        </div>

        

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10
                          bg-white/5 backdrop-blur
                          hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-white">
              🎓 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Software & Data Engineering</strong> – University
              </li>
              <li>
                Relevant coursework in programming, data analysis, and systems
                design.
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-xl border border-white/10
                          bg-white/5 backdrop-blur
                          hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-white">
              💼 Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Academic & Personal Projects
                </h4>
                <p>
                  Development of web applications and data-focused projects
                  using modern technologies and Agile principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
