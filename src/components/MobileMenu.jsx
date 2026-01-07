export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                  bg-[rgba(10,10,10,0.85)] backdrop-blur-xl
                  transition-all duration-300 ease-in-out
                  ${
                    menuOpen
                      ? "h-screen opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer
                   transition-colors hover:text-[#D7B0FF]"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu items */}
      {[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`my-4 text-2xl font-semibold tracking-wide text-white
                      transition-all duration-300
                      hover:text-[#D7B0FF] hover:scale-105
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
