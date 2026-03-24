import { motion } from "framer-motion";

const Preloader = () => {
  const name = "Farah Mahmoud";
  const letters = Array.from(name);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-white dark:bg-zinc-900 grid-bg"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.85, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Container to hold both the text and the line together */}
      <div className="flex flex-col">
        {/* Letter-by-Letter Name Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex justify-center"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="signature text-[55px] sm:text-[120px] md:text-[180px] text-zinc-900 dark:text-zinc-100 leading-none"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* The Animated Expanding Line */}
        <motion.div 
          className="h-0.5 bg-zinc-800 dark:bg-zinc-200 mt-2 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          // Starts slightly after the letters begin to appear for a cascading effect
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;