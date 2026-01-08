export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,21,192,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3">
        <div className="glass border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(83,21,192,0.15)]">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#5315c0] to-fuchsia-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form
            action="https://formspree.io/f/xrebnwgv"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio"
            />

            {/* Name */}
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white
              transition focus:outline-none focus:border-[#5315c0]
              focus:bg-[#5315c0]/5
              focus:shadow-[0_0_12px_rgba(83,21,192,0.35)]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white
              transition focus:outline-none focus:border-[#5315c0]
              focus:bg-[#5315c0]/5
              focus:shadow-[0_0_12px_rgba(83,21,192,0.35)]"
            />

            {/* Message */}
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-none
              transition focus:outline-none focus:border-[#5315c0]
              focus:bg-[#5315c0]/5
              focus:shadow-[0_0_12px_rgba(83,21,192,0.35)]"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-white
              bg-gradient-to-r from-[#5315c0] to-fuchsia-500
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_0_25px_rgba(83,21,192,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
