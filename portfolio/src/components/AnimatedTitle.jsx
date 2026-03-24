import { motion } from "framer-motion";

const AnimatedTitle = ({text}) => {
  // Split the text into an array of individual characters (including spaces)
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // This makes the letters appear one after another
    }
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="uppercase text-6xl sm:text-7xl md:text-[190px] leading-[1.2] text-center font-bold py-10 font flex justify-center flex-wrap"
    >
      {letters.map((letter, index) => {
        // Check if the letter's position is even or odd to alternate up/down
        const isEven = index % 2 === 0;
        
        const letterVariant = {
          hidden: { opacity: 0, y: 100 }, // Start invisible and pushed down
          visible: { 
            opacity: 1, 
            y: isEven ? 20 : -20, // Move even letters up (-20) and odd letters down (20)
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
        
        return (
          <motion.span
            key={index}
            variants={letterVariant}
            className="inline-block -mx-2 sm:-mx-3 mb-25"
          >
            {/* The scale classes here stretch the font to look tall and condensed */}
            <span className="inline-block scale-y-[2.5] scale-x-[0.9] origin-center">
              {letter === " " ? "\u00A0" : letter}
            </span>
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

export default AnimatedTitle