import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const Experience = ({fadeUp}) => {
  return (
    <motion.section
          id="experience"
          className="max-w-7xl mx-auto py-24"
        >
          <motion.div
            variants={fadeUp}
            className="capitalize mb-8 bg-transparent rounded-full border-2 border-zinc-900 dark:border-zinc-100 inline-block py-2 px-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500 font text-lg"
          >
            Qualification & Certifications
          </motion.div>

          <AnimatedTitle text="my journey" />

          <div className="max-w-4xl mx-auto px-6">
            <div className="mt-16 space-y-16 border-l-2 border-zinc-300 dark:border-zinc-700 pl-10 ml-4 md:ml-0">
              <div className="relative">
                <div className="absolute -left-12.25 top-1 w-4 h-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full"></div>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                  2023 - Present
                </span>
                <h3 className="text-3xl font-semibold mt-3 font">
                  Freelance Developer
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
                  Working with local clients to build responsive websites and
                  landing pages focusing on aesthetics and performance.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-12.25 top-1 w-4 h-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full"></div>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                  2022 - Present
                </span>
                <h3 className="text-3xl font-semibold mt-3 font">
                  Undergraduate Engineering Student
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
                  Actively participating in hackathons, open-source projects,
                  and constantly learning new frameworks.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
  )
}

export default Experience