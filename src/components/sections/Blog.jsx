import { RevealOnScroll } from "./RevealOnScroll";

export const Blog = () => {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          
          {/* Title */}
          <h2
            className="text-3xl font-bold mb-6 text-center
                       bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                       bg-clip-text text-transparent
                       drop-shadow-[0_0_20px_rgba(192,132,252,0.25)]"
          >
            Learning Blog
          </h2>

          {/* Intro */}
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Structured learning notes from academic courses and certifications,
            focused on IT operations, systems thinking, and management fundamentals.
          </p>

          <div className="space-y-10">

            {/* =============================== */}
            {/* Administration & Management */}
            {/* =============================== */}
            <div
              className="p-8 rounded-xl border border-white/10
                         bg-white/5 backdrop-blur
                         hover:-translate-y-1 transition-all"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">
                Administration & Management
              </h3>

              <p className="text-gray-400 mb-6">
                Notes from the course <span className="text-gray-300">
                Fundamentals of Administration and Entrepreneurship</span>,
                rewritten as clear and structured blog posts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Blog Post 1 */}
                <a
                  href="/blog/what-is-administration"
                  className="block p-6 rounded-xl border border-white/10
                             bg-white/5
                             hover:-translate-y-1
                             hover:border-[#C084FC]/40
                             hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                             transition-all"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    What Is Administration? A Practical Introduction
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">
                    Definition of administration, management roles, and
                    decision-making in organizations.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#5315C0]/15 text-[#C084FC] px-2 py-1 rounded-full">
                      Administration
                    </span>
                    <span className="text-xs bg-[#5315C0]/15 text-[#C084FC] px-2 py-1 rounded-full">
                      Foundations
                    </span>
                  </div>
                </a>

                {/* Blog Post 2 */}
                <a
                  href="/blog/administrative-process"
                  className="block p-6 rounded-xl border border-white/10
                             bg-white/5
                             hover:-translate-y-1
                             hover:border-[#C084FC]/40
                             hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                             transition-all"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    The Administrative Process Explained
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">
                    Planning, organizing, leading, and controlling as a continuous
                    management cycle.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#5315C0]/15 text-[#C084FC] px-2 py-1 rounded-full">
                      Processes
                    </span>
                    <span className="text-xs bg-[#5315C0]/15 text-[#C084FC] px-2 py-1 rounded-full">
                      Management
                    </span>
                  </div>
                </a>

                {/* Blog Post 3 */}
                <a
                  href="/blog/organizations-as-systems"
                  className="block p-6 rounded-xl border border-white/10
                             bg-white/5 md:col-span-2
                             hover:-translate-y-1
                             hover:border-[#C084FC]/40
                             hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
                             transition-all"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Organizations as Systems
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">
                    Understanding organizations as interconnected systems that
                    transform inputs into value.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#5315C0]/15 text-[#C084FC] px-2 py-1 rounded-full">
                      Systems Thinking
                    </span>
                    <span className="text-xs bg-[#5315C0]/15 text-[#C084FC] px-2 py-1 rounded-full">
                      Strategy
                    </span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
