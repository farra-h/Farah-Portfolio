import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from "lucide-react";
import './App.css'

function App() {
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
  }, [theme])


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  
  const toggleTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light' );
  }

  return (
    <div className='min-h-screen bg-white dark:bg-zinc-900 grid-bg transition-colors relative'>
        {/* Switch mode Roggle */}
        <button 
        onClick={toggleTheme}
        aria-label={'Switch'}
        className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 absolute bottom-1 right-1">
          {
            theme === 'dark' ? (
              <span>☀️</span>
            ) : (
              <span>🌙</span>
            )
          }
        </button>
      
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center border-b-2 border-black dark:border-zinc-100">

        {/* Left text */}
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Egypt · {time}
        </div>

        {/* Right icons */}
        <div className="flex items-end gap-6 text-zinc-700 dark:text-zinc-300">
          <a href="" className='transition-transform duration-500 hover:-translate-y-1'>
            <Mail size={20} className="cursor-pointer hover:opacity-70" />
          </a>
          <a href="https://www.linkedin.com/in/farah-mahmouud" className='transition-transform duration-500 hover:-translate-y-1'>
            <Linkedin size={20} className="cursor-pointer hover:opacity-70" />
          </a>
          <a href="https://github.com/farra-h" className='transition-transform duration-500 hover:-translate-y-1'>
            <Github size={20} className="cursor-pointer hover:opacity-70" />
          </a>
          {/* <a href="" className='transition-transform duration-500 hover:-translate-y-1'>
            < size={20} className="cursor-pointer hover:opacity-70" />
          </a> */}
        </div>
      </div>

      </header>

    </div>
  )
}

export default App
