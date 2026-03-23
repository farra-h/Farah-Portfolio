import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const Experience = ({ fadeUp }) => {
  return (
    <motion.section id="experience" className="max-w-7xl mx-auto py-24">
      <motion.div
        variants={fadeUp}
        className="capitalize mb-8 bg-transparent rounded-full border-2 border-zinc-900 dark:border-zinc-100 inline-block py-2 px-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500 font text-lg"
      >
        Qualification & Certifications
      </motion.div>

      <AnimatedTitle text="my journey" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mt-16 space-y-16 border-l-2 border-zinc-300 dark:border-zinc-700 pl-10 ml-4 md:ml-0">
          
          {/* 1. DEPI Internship */}
          <div className="relative">
            <div className="absolute -left-12.25 top-1 w-4 h-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
              Nov 2025 - Present
            </span>
            <h3 className="text-3xl font-semibold mt-3 font">
              Frontend Developer
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
              <strong>Digital Egypt Pioneers Initiative (DEPI)</strong> — Specialized in building React applications with comprehensive knowledge of modern web essentials. Gained proficiency in Node.js, version control, and containerization, culminating in a real-world full-stack capstone project.
            </p>
          </div>

          {/* 2. Creativa Internship */}
          <div className="relative">
            <div className="absolute -left-12.25 top-1 w-4 h-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
              Jun 2025 - Jul 2025
            </span>
            <h3 className="text-3xl font-semibold mt-3 font">
              Web Designer
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
              <strong>Creativa Innovation Hubs</strong> — Completed an intensive program covering front-end web design fundamentals and freelancing. Gained hands-on experience through practical projects and real-world scenarios, strengthening technical skills and market readiness.
            </p>
          </div>

          {/* 3. Education */}
          <div className="relative">
            <div className="absolute -left-12.25 top-1 w-4 h-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
              2022 - Present
            </span>
            <h3 className="text-3xl font-semibold mt-3 font">
              Computer and Systems Engineering
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-lg">
              <strong>Zagazig University</strong> — Currently a senior student, developing a strong theoretical and practical foundation in software engineering, modern web technologies, and complex problem-solving.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Experience;