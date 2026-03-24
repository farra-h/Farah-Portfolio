import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* The element you are hovering over */}
      {children}
      
      {/* The Hover Bubble */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -bottom-12 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black text-xs font-medium rounded-md whitespace-nowrap z-50 shadow-xl font"
          >
            {text}
            {/* The little triangle pointer at the bottom */}
            <div className="absolute left-1/2 -top-2 -translate-x-1/2 border-4 border-transparent border-b-zinc-900 dark:border-t-zinc-100" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;