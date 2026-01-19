import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">
          
          {/* Headline */}
          <h2
            className="text-5xl md:text-7xl font-bold mb-6
                       bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                       bg-clip-text text-transparent leading-tight
                       drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]"
          >
            Hi, I&apos;m Yenni Delgado
          </h2>

          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-full
                         border border-[#C084FC]/40
                         shadow-[0_0_35px_rgba(192,132,252,0.35)]
                         overflow-hidden"
            >
              <img
                src="src/assets/profile.png"
                alt="Yenni Delgado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Software and Data Engineering student with a psychology background,
            combining IT support skills with user-centered and
            process-oriented thinking.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                         text-white py-3 px-6 rounded font-medium transition-all
                         hover:-translate-y-0.5
                         hover:shadow-[0_0_25px_rgba(192,132,252,0.5)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#C084FC]/60 text-[#C084FC]
                         py-3 px-6 rounded font-medium transition-all duration-200
                         hover:-translate-y-0.5
                         hover:bg-[#5315C0]/20
                         hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
            >
              Contact Me
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
