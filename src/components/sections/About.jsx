import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const systemsSkills = [
    "Ubuntu (Server & Desktop)",
    "VirtualBox",
    "Linux User & Permission Management",
    "Basic Network Configuration",
    "Service Configuration (DNS / Directory basics)",
  ];

  const administrationSkills = [
    "Administrative Process (Planning, Organizing, Directing, Controlling)",
    "Strategic Thinking & Goal Definition",
    "Process-Oriented Management",
    "Basic Financial Concepts (Profitability, Margin, Returns)",
    "Customer-Oriented Thinking",
  ];

  const softwareSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (Vanilla)",
    "Git & GitHub",
    "Git Flow",
    "SCRUM Basics",
    "Agile Collaboration",
    "Technical Documentation",
    "GitHub Pages",
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
          <div
            className="rounded-xl p-8 border border-white/10
                       bg-white/5 backdrop-blur
                       hover:-translate-y-1 transition-all"
          >
            <p className="text-gray-300 mb-10 text-center max-w-2xl mx-auto">
              I am currently building a strong foundation in operating systems,
              virtualization, and technical support through academic projects and
              hands-on practice. I enjoy solving technical issues, documenting
              processes, and supporting users in structured environments while
              continuing to grow toward Agile and team-oriented roles.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Systems */}
              <SkillSection
                title="Systems & Virtualization"
                sectionKey="systems"
                openSection={openSection}
                toggleSection={toggleSection}
                skills={systemsSkills}
              />

              {/* Administration */}
              <SkillSection
                title="Administration & Business Foundations"
                sectionKey="administration"
                openSection={openSection}
                toggleSection={toggleSection}
                skills={administrationSkills}
              />
              {/* Software */}
              <SkillSection
                title="Software & Web Development"      
                sectionKey="software"
                openSection={openSection}
                toggleSection={toggleSection}
                skills={softwareSkills}
              />
            </div>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div
              className="p-6 rounded-xl border border-white/10
                         bg-white/5 backdrop-blur
                         hover:-translate-y-1 transition-all"
            >
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
            <div
              className="p-6 rounded-xl border border-white/10
                         bg-white/5 backdrop-blur
                         hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-white">
                💼 Experience
              </h3>
              <p className="text-gray-300">
                Academic and personal projects focused on systems, web
                development, and process-oriented thinking in structured
                environments.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

/* ---------------------------------- */
/* Reusable Skill Section Component   */
/* ---------------------------------- */

const SkillSection = ({
  title,
  sectionKey,
  openSection,
  toggleSection,
  skills,
}) => {
  const isOpen = openSection === sectionKey;

  return (
    <div className="rounded-xl p-6 transition-all">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-[#C084FC] text-2xl leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-wrap gap-2 animate-fade-in">
          {skills.map((skill, key) => (
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
      )}
    </div>
  );
};
