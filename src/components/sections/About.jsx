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

  <ul className="space-y-4 text-gray-300 text-sm">

    <li>
      <strong className="text-white">
        Software Engineering & Data
      </strong>
      <br />
      Digital University Institution of Antioquia
      <br />
      <span className="text-gray-400">
        Feb 2024 – Present
      </span>
    </li>

    <li>
      <strong className="text-white">
        Data Analysis & Visualization Bootcamp
      </strong>
      <br />
      Ministry of IT and Communications, Colombia
      <br />
      <span className="text-gray-400">
        Mar 2024 – Aug 2024
      </span>
    </li>

    <li>
      <strong className="text-white">
        Fullstack Web Development
      </strong>
      <br />
      Simplon.co Grand Ouest
      <br />
      <span className="text-gray-400">
        Oct 2022 – Mar 2023
      </span>
    </li>

    <li>
      <strong className="text-white">
        Web Development (Programming Focus)
      </strong>
      <br />
      Technological University of Pereira
      <br />
      <span className="text-gray-400">
        Apr 2022 – Dec 2022
      </span>
    </li>

    <li>
      <strong className="text-white">
        B.Sc. in Psychology
      </strong>
      <br />
      Catholic University of Colombia
      <br />
      <span className="text-gray-400">
        Aug 2015 – Jun 2020
      </span>
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

  <ul className="space-y-5 text-gray-300 text-sm">

    <li>
      <strong className="text-white">
        Java Backend Developer (Intern)
      </strong>
      <br />
      Accenture Colombia · Remote
      <br />
      <span className="text-gray-400">
        Jul 2023 – Dec 2023
      </span>
      <p className="mt-1">
        Collaborated on backend solutions for banking applications using Java,
        following coding standards, secure practices, and unit testing with
        JUnit and Mockito.
      </p>
    </li>

    <li>
      <strong className="text-white">
        Python Developer
      </strong>
      <br />
      Colombian TI Software S.A.S · Remote
      <br />
      <span className="text-gray-400">
        Aug 2022 – Nov 2022
      </span>
      <p className="mt-1">
        Developed full-stack web applications using Python, Flask, and Django,
        working with SQL databases and RESTful APIs.
      </p>
    </li>

    <li>
      <strong className="text-white">
        Technical Support – Apple Mobile
      </strong>
      <br />
      Teleperformance · On-site
      <br />
      <span className="text-gray-400">
        Feb 2022 – Jun 2022
      </span>
      <p className="mt-1">
        Provided technical support for iOS devices, troubleshooting hardware
        and software issues, account configuration, and technical documentation.
      </p>
    </li>

    <li>
      <strong className="text-white">
        Research Assistant
      </strong>
      <br />
      Catholic University of Colombia · On-site
      <br />
      <span className="text-gray-400">
        Feb 2017 – Nov 2018
      </span>
      <p className="mt-1">
        Coordinated a social research pilot study, managed participant databases,
        collected data, and produced analytical and research reports.
      </p>
    </li>

    <li>
      <strong className="text-white">
        Psychologist
      </strong>
      <br />
      ESE San Juan de Dios Health Center · On-site
      <br />
      <span className="text-gray-400">
        Feb 2020 – May 2020
      </span>
      <p className="mt-1">
        Conducted individual and group mental health interventions and developed
        organizational diagnostics and intervention plans.
      </p>
    </li>

  </ul>
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
