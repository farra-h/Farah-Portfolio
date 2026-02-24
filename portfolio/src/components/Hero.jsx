import { motion } from "framer-motion";

const Hero = ({ staggerContainer, fadeUp }) => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center justify-center min-h-screen"
    >
      {/* LEFT: Staggered Text Reveal */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="leading-[0.9]"
      >
        {["imagine.", "sketch.", "debug.", "wow."].map((word, index) => (
          <motion.h1
            key={index}
            variants={fadeUp}
            className={`font uppercase font-bold text-6xl sm:text-7xl lg:text-[100px] ${word === "debug." ? "bg-blue-100 dark:bg-blue-900/40 inline-block px-2" : ""}`}
          >
            {word}
          </motion.h1>
        ))}

        <motion.a
          variants={fadeUp}
          href="#projects"
          className="inline-block mt-8 text-lg border-b-3 border-zinc-900 dark:border-zinc-100 pb-1 cursor-pointer hover:opacity-70 transition-opacity"
        >
          View My Work →
        </motion.a>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-12"
      >
        <div className="flex gap-8 items-start">
          <div className="bg-zinc-200 dark:bg-zinc-800 p-6 relative shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src="me.jpeg"
              alt="Farah Mahmoud"
              className="w-60 object-cover aspect-4/5"
            />
            <span className="absolute bottom-4 right-1 text-gray-600 text-xl chewy-regular drop-shadow-md">
              code.
              <br />
              build.
              <br />
              capture.
            </span>
          </div>

          <div className="flex flex-col gap-3 text-lg">
            {["About me", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group cursor-pointer font text-xl transition-transform duration-300 hover:translate-x-3"
                >
                  <span className="border-b-2 border-transparent group-hover:border-zinc-900 dark:group-hover:border-zinc-100 pb-1 transition-colors">
                    {item}
                  </span>{" "}
                  →
                </a>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-semibold signature">
            Hello, I'm Farah Mahmoud
          </h2>
          <div className="flex items-center gap-6">
            <a
              href="/Farah Mahmoud Resume.pdf"
              target="_blank"
              className="flex items-center gap-3 hover:border-b-2 text-lg "
            >
              <p className="font">View CV</p>
              <svg
                className="w-4 h-4 md:w-5 md:h-5 rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
            <a
              href="/Farah Mahmoud Resume.pdf"
              download
              className="px-6 py-2 border-2 border-zinc-900 dark:border-zinc-100 rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all font text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
