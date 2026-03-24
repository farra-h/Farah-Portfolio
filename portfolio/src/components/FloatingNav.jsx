import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Define the links and their SVG icons
  const navItems = [
    {
      id: "contact",
      title: "Contact",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      id: "experience",
      title: "Experience",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      id: "projects",
      title: "Projects",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      ),
    },
    {
      id: "skills",
      title: "Skills",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      ),
    },
    {
      id: "about me",
      title: "About",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
    {
      id: "home",
      title: "Home",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
  ];

  return (
    <div className="fixed bottom-5 left-6 z-50 flex flex-col-reverse items-start gap-3">
      {/* 1. The Toggle Button (Always visible at the bottom) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-all z-10"
        aria-label="Toggle Navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            /> // X icon
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            /> // Hamburger icon
          )}
        </svg>
      </button>

      {/* 2. The Expandable List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
              hidden: { transition: { staggerChildren: 0.05 } },
            }}
            className="flex flex-col-reverse gap-3"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                className="w-10 h-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all relative group"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {item.icon}
                </svg>
                {/* Tooltip that shows on hover */}
                <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
