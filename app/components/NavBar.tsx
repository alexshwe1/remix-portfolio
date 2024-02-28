import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((previous) => !previous);
  };

  const navItems = [{title: 'About', path: '/'}, {title: 'Portfolio', path: '/portfolio'}, {title: 'Resume', path: '/resume'}];

  return (
    <header className="p-2 bg-white border-b-1 border-gray-300">
      <div 
        className="flex flex-row place-content-between p-2"
        style={{ '--tilt': isOpen ? '0deg': '-20deg' } as any}
      >
        <div className='flex items-start flex-col group'>
          <div className="py-2 block group-hover:animate-wiggle">
            <p
              role="img"
              aria-label="burger"
              className={`text-5xl transition-transform ml-2 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={handleClick}
            >
              🍔
            </p>
          </div>
          <div className={`${isOpen ? "" : ""}`}>
            {navItems.map((item, i) => {
              return(
                <NavLink
                  key={i}
                  to={`${item.path}`}
                  className={`py-2 flex flex-col static ml-2 duration-500 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "animate-fade-in" : "animate-fade-out invisible -mt-20 var(--delay, 0)"
                  }`}
                  style={{ '--delay': `${i * 0.25}s` } as any}
                >
                  <p className="text-base font-semibold transition hover:scale-105 hover:text-orange-500 transition-colors">{item.title}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-start p-2">
          <button className="px-4 hover:animate-wiggle" onClick={() => window.open('https://github.com/alexshwe1', '_blank')}><FaGithub size={50}/></button>
          <button className="px-4 hover:animate-wiggle" onClick={() => window.open('https://www.linkedin.com/in/alex-shwe/', '_blank')}><FaLinkedin size={50}/></button>
        </div>
      </div>
    </header>
  );
}
