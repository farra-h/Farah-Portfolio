import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate a loading delay for the signature reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust time to match your signature animation speed

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Animation Variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900 grid-bg transition-colors overflow-hidden">
        {/* Switch mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={"Switch theme"}
          className=" w-10 h-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md dark:hover:bg-zinc-700 flex items-center justify-center fixed bottom-6 right-6 z-50 transition-all"
        >
          {theme === "dark" ? <span>☀️</span> : <span>🌙</span>}
        </button>

        <Header time={time} />

        {/* Hero Section */}
        <Hero staggerContainer="staggerContainer" fadeUp="fadeUp" />

        {/* About Section */}
        <About staggerContainer="staggerContainer" fadeUp="fadeUp" />

        {/* Skills Section */}
        <Skills staggerContainer="staggerContainer" fadeUp="fadeUp" />

        {/* Projects Section */}
        <Projects staggerContainer="staggerContainer" fadeUp="fadeUp" />

        {/* Experience Section */}
        <Experience fadeUp="fadeUp" />

        {/* Contact Section */}
        <Contact staggerContainer="staggerContainer" fadeUp="fadeUp" />

        {/* Footer Section */}
        <Footer />

        {/* NEW FLOATING NAV */}
        <FloatingNav />
      </div>
    </>
  );
}

export default App;
