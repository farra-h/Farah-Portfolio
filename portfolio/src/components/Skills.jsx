import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const Skills = ({ staggerContainer, fadeUp }) => {
  // Updated data structure to support the new horizontal layout with icons
  const skillCategories = [
    {
      titlePart1: "Frontend",
      titlePart2: "Development",
      subtitle: "Building Interactive UIs",
      skills: [
        {
          name: "HTML",
          icon: (
            <span className="font-mono font-bold tracking-tighter">
              {"</>"}
            </span>
          ),
        },
        {
          name: "React",
          icon: (
            <span className="font-mono font-bold tracking-tighter">{"<>"}</span>
          ),
        },
        {
          name: "CSS / Tailwind / Bootstrap",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <span className="font-mono font-bold tracking-tighter">{">_"}</span>
          ),
        },
        {
          name: "Saas",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          ),
        },
        // {
        //   name: "Next.js",
        //   icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
        // },
        // { name: "Framer Motion", icon: <span className="font-mono font-bold tracking-tighter">{"≈"}</span> }
      ],
    },
    // {
    //   titlePart1: "Backend",
    //   titlePart2: "Engineering",
    //   subtitle: "Architecting Scalable Systems",
    //   skills: [
    //     {
    //       name: "Node.js / Express",
    //       icon: (
    //         <span className="font-mono font-bold tracking-tighter">
    //           {"{ }"}
    //         </span>
    //       ),
    //     },
    //     // { name: "Python & Django", icon: <span className="font-mono font-bold tracking-tighter">{"py"}</span> },
    //     // {
    //     //   name: "PostgreSQL",
    //     //   icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    //     // },
    //     {
    //       name: "MongoDB",
    //       icon: (
    //         <svg
    //           className="w-5 h-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={1.5}
    //             d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    //           />
    //         </svg>
    //       ),
    //     },
    //   ],
    // },
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto py-10 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeUp}
        className="capitalize mb-8 bg-transparent rounded-full border border-zinc-900 dark:border-zinc-100 inline-block py-2 px-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500 font text-lg"
      >
        The Workshop
      </motion.div>
      <AnimatedTitle text="thearsenal" />

      {/* New Horizontal Editorial Layout */}
      <div className="flex flex-col gap-24 mt-32">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-zinc-200 dark:border-zinc-800/50 pb-24 last:border-0"
          >
            {/* Left Side: Large Titles */}
            <div className="w-full md:w-5/12">
              <h3 className="text-6xl md:text-[80px] leading-[1.1] font-bold font text-zinc-900 dark:text-zinc-100">
                {category.titlePart1} <br /> {category.titlePart2}
              </h3>
              <p className="mt-6 text-2xl font text-zinc-600 dark:text-zinc-400">
                {category.subtitle}
              </p>
            </div>

            {/* Right Side: Technologies List */}
            <div className="w-full md:w-6/12 flex flex-col items-start md:items-end md:mt-16">
              <div className="w-full max-w-lg">
                <h4 className="text-3xl font font-semibold mb-8 text-zinc-900 dark:text-zinc-100">
                  Technologies
                </h4>

                {/* Pill Container */}
                <div className="flex flex-wrap max-w-sm gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-xl text-xl font bg-white/50 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
