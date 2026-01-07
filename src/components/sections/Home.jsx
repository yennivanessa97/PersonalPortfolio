export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6
                     bg-gradient-to-r from-[#5315C0] to-[#C084FC]
                     bg-clip-text text-transparent leading-tight
                     drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]"
        >
          Hi, I&apos;m Yenni Delgado
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        Software and Data Engineering student with a psychology background, focused on
Agile frameworks, product-oriented roles, and data-driven decision-making.

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
    </section>
  );
};
