import { useRef } from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "ULTIMATE-MEDIA-DOWNLO...",
    description:
      "A powerful, feature-rich command-line tool for downloading media from 1000+...",
    tags: [
      "any-audio-downloader",
      "any-video-downloader",
      "apple-music-downloader",
      "cli",
    ],
    language: "Python",
    stars: 38,
    date: "10/2/2025",
    link: "#",
  },
  {
    title: "CODEPENS",
    description:
      "This repository contains a variety of web projects, UI/UX experiments, and creativ...",
    tags: ["codepen", "codepenchallenge", "codepens", "experiments"],
    language: "JavaScript",
    stars: 6,
    date: "6/19/2025",
    link: "#",
  },
  {
    title: "Iconoodle",
    description:
      "Iconoodle is a small Next.js + TypeScript site and icon library of hand-drawn SVG...",
    tags: ["doodles", "icons", "illustrations", "nextjs"],
    language: "TypeScript",
    stars: 6,
    date: "12/28/2025",
    link: "#",
  },
  {
    title: "MINDROUTE_DOCUMENT...",
    description:
      "This repository contains how to build your own ai roadmap generator...",
    tags: ["ai", "documentation", "roadmap-project"],
    language: "N/A",
    stars: 0,
    date: "7/15/2025",
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Projects() {
  const scrollContainerRef = useRef(null);

  // Function to handle the left/right button scrolling
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // 400 is roughly the width of one card + gap. Adjust if needed.
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* 1. Main Header Section */}
      <div className="flex flex-col mb-16">
        <motion.div
          variants={fadeUp}
          className="capitalize mb-8 bg-transparent rounded-full border-2 border-zinc-900 dark:border-zinc-100 inline-flex py-2 px-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500 font text-lg w-max"
        >
          Projects
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-5xl px-6 md:text-7xl lg:text-[110px] font-bold font uppercase mt-10 leading-[0.9] tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          CRAFTING DIGITAL <br /> EXPERIENCES
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-xl px-6 md:text-2xl text-zinc-600 dark:text-zinc-400 font mt-8"
        >
          A journey through code, creativity, and endless possibilities.
        </motion.p>
      </div>

      <motion.div variants={fadeUp} className="max-w-6xl mx-auto px-6">
        {/* 2. GitHub Style Header Box */}
        <motion.div
          variants={fadeUp}
          className="border-b border-zinc-300 dark:border-zinc-700 py-8 mb-6 flex items-start justify-between"
        >
          <div className="flex items-start gap-4 md:gap-6">
            {/* GitHub Icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 md:w-12 md:h-12 fill-current mt-1 text-zinc-800 dark:text-zinc-200"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            <div>
              <h4 className="text-xs md:text-sm font-semibold tracking-widest uppercase text-zinc-500 font">
                The Code Chronicles
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold font uppercase mt-1 tracking-wide text-zinc-900 dark:text-zinc-100">
                GITHUB REPOSITORIES
              </h2>
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-2 font">
                Where ideas transform into open-source reality, one commit at a
                time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Navigation Arrows */}
        <motion.div variants={fadeUp} className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>

        {/* 4. Scrollable Cards Container */}
        <motion.div
          variants={fadeUp}
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="snap-start min-w-[320px] max-w-[320px] md:min-w-95 md:max-w-95 p-6 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white/50 dark:bg-zinc-900/50 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              {/* Top section */}
              <div>
                <h3 className="text-xl font-bold font uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 font leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs text-zinc-600 dark:text-zinc-400 font"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom section */}
              <div className="mt-8">
                <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400 mb-2 font">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${project.language === "Python" ? "bg-blue-500" : project.language === "JavaScript" ? "bg-yellow-400" : project.language === "TypeScript" ? "bg-blue-600" : "bg-zinc-400"}`}
                    ></span>
                    {project.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    {project.stars}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 mb-6 font">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {project.date}
                </div>

                <a
                  href={project.link}
                  className="block w-full text-center py-2.5 rounded border border-zinc-300 dark:border-zinc-700 font text-sm font-semibold hover:bg-zinc-900 hover:border-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:border-zinc-100 dark:hover:text-black transition-all"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
