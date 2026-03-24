import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const About = ({ staggerContainer, fadeUp }) => {
  return (
    <motion.section
      id="about me"
      className="max-w-7xl mx-auto py-10 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeUp}
        className="capitalize mb-8 bg-transparent rounded-full border-2 border-zinc-900 dark:border-zinc-100 inline-block py-2 px-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500 font text-lg"
      >
        Identity
      </motion.div>
      <AnimatedTitle text="creative dev" />

      <motion.div
        variants={fadeUp}
        className="text-center min-h-60 flex items-center justify-center"
      >
        <p className="text-zinc-600 dark:text-zinc-300 my-5 mx-2 max-w-2xl text-sm md:text-2xl leading-relaxed font">
          "I'm a dedicated Frontend Developer 
          passionate about React and modern JavaScript. 
          I specialize in bridging the gap between design 
          and engineering turning complex ideas into intuitive, 
          highly engaging web interfaces."
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-10 px-8 md:px-15 border-t border-b border-zinc-300 dark:border-zinc-500 py-12"
      >
        <div className="flex flex-col md:flex-row gap-7 justify-between items-center text-center sm:text-start">
          <div className="max-w-sm">
            <span className="text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-sm font-bold mb-3 block">
              Specialties
            </span>
            <p className="text-xl font">
              Frontend Development <br /> 
                UI/UX Implementation <br /> 
                Interactive Web Animations
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center md:text-5xl font-bold uppercase font text-orange-50 dark:text-orange-600">
              Building <br /> the Future.
            </h3>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold uppercase sm:text-end font text-zinc-500 dark:text-zinc-300">
              Turning <br /> Ideas <br /> Into Reality.
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
