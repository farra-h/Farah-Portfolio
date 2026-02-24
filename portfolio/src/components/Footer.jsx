import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "Github", url: "https://github.com/farra-h" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/farah-mahmouud" },
    { name: "Gmail", url: "mailto:farah.mahmoud@gmail.com" },
  ];

  const navLinks = [
    "Home", "About Me", "Skills", "Projects", "Experience", "Contact"
  ];

  return (
    <footer className="relative w-full border-t border-zinc-300 dark:border-zinc-700 pt-20 pb-10 px-6 mt-20 bg-zinc-100/50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
        
        {/* Left Column: Info */}
        <div className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 font">
          <p className="capitalize signature text-5xl text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity">
            farah mahmoud
          </p>
          <div className="space-y-1 text-sm">
            <p>© {new Date().getFullYear()} Farah's Portfolio</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Center Column: Massive Social Links */}
        <div className="flex flex-col items-center gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url}
              className="group flex items-center gap-3 text-3xl md:text-5xl font-bold font text-zinc-900 dark:text-zinc-100"
            >
              {link.name}
              {/* The arrow icon inside a circle */}
              <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Right Column: Navigation */}
        <div className="flex flex-col items-end gap-4 text-lg font text-zinc-600 dark:text-zinc-400">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-black dark:hover:text-white border-b-2 border-transparent hover:border-zinc-900 dark:hover:border-zinc-100 pb-1 hover:translate-x-3 transition-transform duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      
      {/* Bottom Subtle Line */}
      <div className="max-w-7xl mx-auto mt-20 h-[1px] bg-zinc-300 dark:bg-zinc-700 w-full" />
    </footer>
  );
}