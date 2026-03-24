import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // 1. Track mouse movement
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // 2. Track scrolling
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear the timeout if we are still scrolling
      clearTimeout(scrollTimeout);
      
      // If scroll stops for 150ms, shrink the cursor back to normal
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {/* INNER DOT (Follows mouse exactly) */}
      <motion.div
        className={`fixed top-0 left-0 ${!isScrolling ? "w-1.5" : "w-2"}  ${!isScrolling ? "h-1.5" : "h-2"} bg-zinc-900 dark:bg-zinc-100 rounded-full pointer-events-none z-[9999] hidden md:block`}
        animate={{
          x: mousePos.x - 4, // offset by half the width (8px / 2 = 4)
          y: mousePos.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* OUTER RING (Trails behind and expands on scroll) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-3 border-zinc-900/50 dark:border-zinc-100/50 bg-zinc-900/9 dark:bg-zinc-100/10 pointer-events-none z-9998 hidden md:block"
        animate={{
          // If scrolling, center the 48px circle (offset 24). If not, center the 32px circle (offset 16).
          x: mousePos.x - ( 0),
          y: mousePos.y - ( 0),
          width: isScrolling ? 48 : 25,
          height: isScrolling ? 48 : 25,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};

export default Cursor;