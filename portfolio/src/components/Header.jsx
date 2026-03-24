import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import Tooltip from "./Tooltip";

const Header = ({ time }) => {
  return (
    <header className="w-full px-8 md:px-15">
      <div className="mx-auto py-5 flex justify-between items-center border-b-2 border-black dark:border-zinc-100">
        {/* Left text */}
        <div className="text-[12px] sm:text-[17px] text-zinc-600 dark:text-zinc-300 almendra-regular">
          Egypt · {time}
        </div>

        {/* Right icons */}
        <div className="flex items-end gap-3 sm:gap-6 text-zinc-700 dark:text-zinc-300">
          <a
            href="https://wa.me/201060357092"
            target="_blank"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Tooltip text="WhatsApp">
              <MessageCircle
                size={20}
                className="cursor-pointer hover:text-blue-80 hover:opacity-80"
              />
            </Tooltip>
          </a>
          <a
            href="mailto:farah.mahmoud@gmail.com"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Tooltip text="Email">
              <Mail size={20} className="cursor-pointer hover:text-blue-80 hover:opacity-80" />
            </Tooltip>
          </a>
          <a
            href="https://www.linkedin.com/in/farah-mahmouud"
            target="_blank"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Tooltip text="LinkedIn">
              <Linkedin size={20} className="cursor-pointer hover:text-blue-80 hover:opacity-80" />
            </Tooltip>
          </a>
          <a
            href="https://github.com/farra-h"
            target="_blank"
            className="transition-transform duration-500 hover:-translate-y-1"
          >
            <Tooltip text="Github">
              <Github size={20} className="cursor-pointer hover:text-blue-80 hover:opacity-80" />
            </Tooltip>
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
