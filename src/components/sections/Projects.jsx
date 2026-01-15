export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-3xl font-bold mb-12 text-center
                     bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_20px_rgba(192,132,252,0.25)]"
        >
          Projects
        </h2>

        <div className="space-y-10">

          {/* ===================== */}
          {/* Operating Systems */}
          {/* ===================== */}
          <div
            className="p-8 rounded-xl border border-white/10
                       bg-white/5 backdrop-blur
                       hover:-translate-y-1 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              Operating Systems
            </h3>

            <p className="text-gray-400 mb-6">
              Academic projects focused on virtualization, system administration,
              and core IT services used in organizational environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
       
              <div
        onClick={() =>
          window.open("https://youtu.be/X_DPi32d0zI", "_blank")
        }
        className="p-6 rounded-xl border border-white/10
                   bg-white/5 cursor-pointer
                   hover:-translate-y-1
                   hover:border-[#C084FC]/40
                   hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                   transition-all"
      >
        <h4 className="text-lg font-semibold text-white mb-2">
          🎥 Virtual Machines Implementation
        </h4>

        <p className="text-gray-400 text-sm mb-4">
          Implementation of Ubuntu virtual machines for server and client
          environments using Oracle VirtualBox, including basic connectivity.
        </p>

        <a
          href="https://youtu.be/X_DPi32d0zI"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[#C084FC] hover:text-[#E9D5FF] font-medium"
        >
          Watch video →
        </a>
      </div>

              {/* Project 2 */}
              <div
        onClick={() =>
          window.open("https://youtu.be/gmK8NSGcwJs", "_blank")
        }
        className="p-6 rounded-xl border border-white/10
                   bg-white/5 cursor-pointer
                   hover:-translate-y-1
                   hover:border-[#C084FC]/40
                   hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                   transition-all"
      >
        <h4 className="text-lg font-semibold text-white mb-2">
          🎥 Active Directory & DNS on Ubuntu Server
        </h4>

        <p className="text-gray-400 text-sm mb-4">
          Configuration of directory services and DNS on Ubuntu Server
          to simulate enterprise authentication and network services.
        </p>

        <a
          href="https://youtu.be/gmK8NSGcwJs"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[#C084FC] hover:text-[#E9D5FF] font-medium"
        >
          Watch video →
        </a>
      </div>
              {/* Project 3 */}
              <div
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1bDniLkvKqauh0p5ay_74tSYWDG_ye6POHWKCxb4IgEc/edit?usp=sharing",
            "_blank"
          )
        }
        className="p-6 rounded-xl border border-white/10
                   bg-white/5 md:col-span-2 cursor-pointer
                   hover:-translate-y-1
                   hover:border-[#C084FC]/40
                   hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                   transition-all"
      >
        <h4 className="text-lg font-semibold text-white mb-2">
          📄 Operating Systems in Organizations
        </h4>

        <p className="text-gray-400 text-sm mb-4">
          Comparative analysis of operating systems used in data centers
          and workstations, including recommended services and security
          mechanisms.
        </p>

        <a
          href="https://docs.google.com/document/d/1bDniLkvKqauh0p5ay_74tSYWDG_ye6POHWKCxb4IgEc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[#C084FC] hover:text-[#E9D5FF] font-medium"
        >
          Read article →
        </a>
      </div>

            </div>
          </div>

{/* Blog / Learning Project Card */}
<a
  href="/blog/administration-entrepreneurship"
  className="block group"
>
  <div
    className="p-6 rounded-xl border border-white/10
               bg-white/5 backdrop-blur
               hover:-translate-y-1
               hover:border-[#C084FC]/40
               hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
               transition-all"
  >
    {/* Badge */}
    <span
      className="inline-block mb-3 px-3 py-1 text-xs font-medium
                 rounded-full bg-[#C084FC]/10 text-[#E9D5FF]"
    >
      Learning Blog
    </span>

    {/* Title */}
    <h3 className="text-2xl font-bold mb-2 text-white">
      Administration & Entrepreneurship
    </h3>

    {/* Description */}
    <p className="text-gray-400 text-sm mb-4">
      A structured learning blog where I organize course notes and connect
      administrative and entrepreneurial concepts with real-world and
      product-oriented thinking.
    </p>

    {/* CTA */}
    <span
      className="text-[#C084FC] font-medium
                 group-hover:text-[#E9D5FF]"
    >
      Read blog →
    </span>
  </div>
</a>

          {/* ===================== */}
          {/* Placeholder Course 2 */}
          {/* ===================== */}
          <div
            className="p-8 rounded-xl border border-white/10
                       bg-white/5 backdrop-blur
                       opacity-70"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Databases & Data Management
            </h3>
            <p className="text-gray-400">
              Future projects focused on database design, queries, and data
              organization.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
