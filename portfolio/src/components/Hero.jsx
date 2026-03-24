import { motion, useScroll, useTransform } from "framer-motion";

const Hero = ({ staggerContainer, fadeUp }) => {
  // Hook to track scroll progress for the "fade out" effect
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center justify-center min-h-screen text-center sm:text-start"
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
            className={`font uppercase font-bold text-5xl sm:text-7xl lg:text-[100px] ${word === "debug." ? "bg-blue-80 dark:bg-blue-900/70 inline-block px-2" : ""}`}
          >
            {word}
          </motion.h1>
        ))}

        <motion.a
          variants={fadeUp}
          href="#projects"
          className="inline-block mt-8 text-md sm:text-lg border-b-3 border-zinc-900 dark:border-zinc-100 pb-1 cursor-pointer hover:opacity-70 transition-opacity font"
        >
          View My Work →
        </motion.a>
      </motion.div>

      {/* RIGHT: Image & Menu */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-12"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center sm:items-start">
          {/* ANIMATED IMAGE CONTAINER */}
          <div className="relative group">
            {/* The Gray Border (Moves slower) */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -inset-4 bg-zinc-200 dark:bg-zinc-800 -z-10 shadow-xl"
            />
            
            {/* The Actual Photo (Moves faster/offset) */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden shadow-2xl"
            >
              <img
                src="me.jpeg"
                alt="Farah Mahmoud"
                className="w-60 md:w-70 object-cover aspect-4/5" 
              />
              <span className="absolute bottom-4 right-4 text-white text-lg sm:text-xl chewy-regular drop-shadow-lg text-right leading-tight">
                code.<br />build.<br />capture.
              </span>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 text-lg pt-4">
            {["About me", "Skills", "Projects", "Experience", "Contact"].map((item) => (
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
            ))}
          </div>
        </div>

        {/* Hello & CV Buttons */}
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl text-center sm:text-start font-semibold signature">
            Hello, I'm Farah Mahmoud
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="/Farah Mahmoud Resume.pdf" target="_blank" className="flex items-center gap-3 hover:border-b-2 text-lg font">
              View CV
              <svg className="w-4 h-4 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
            <a
              href="/Farah Mahmoud Resume.pdf"
              download
              className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-100 rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all font text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR (Center Bottom) */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-sm font-light tracking-[0.3em] uppercase text-zinc-700 dark:text-zinc-300 font">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;