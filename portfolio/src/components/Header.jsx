import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Header = ({ time }) => {
  return (
    <header className="w-full px-8 md:px-15">
      <div className="mx-auto py-5 flex justify-between items-center border-b-2 border-black dark:border-zinc-100">
        {/* Left text */}
        <div className="text-zinc-600 dark:text-zinc-400 almendra-regular">
          Egypt · {time}
        </div>

        {/* Right icons */}
        <div className="flex items-end gap-6 text-zinc-700 dark:text-zinc-300">
          <a
            href="https://wa.me/201060357092"
            target="_blank"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <MessageCircle
              size={20}
              className="cursor-pointer hover:opacity-70"
            />
            <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              WhatsUp
            </span>
          </a>
          <a
            href="mailto:farah.mahmoud@gmail.com"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Mail size={20} className="cursor-pointer hover:opacity-70" />
          </a>
          <a
            href="https://www.linkedin.com/in/farah-mahmouud"
            target="_blank"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Linkedin size={20} className="cursor-pointer hover:opacity-70" />
          </a>
          <a
            href="https://github.com/farra-h"
            target="_blank"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Github size={20} className="cursor-pointer hover:opacity-70" />
          </a>
          {/* <a href="" className='transition-transform duration-500 hover:-translate-y-1'>
            < size={20} className="cursor-pointer hover:opacity-70" />
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
