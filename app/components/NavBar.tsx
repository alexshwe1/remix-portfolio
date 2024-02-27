import { NavLink } from "@remix-run/react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((previous) => !previous);
  };

  const navItems = ['About', 'Portfolio', 'Resume'];

  return (
    <header className="flex items-start flex-col p-2 group bg-white border-b-0.1 border-gray-200">
      <div 
        className="flex flex-row items-center group-hover:animate-wiggle"
        style={{ '--tilt': isOpen ? '0deg': '-20deg' } as any}
      >
        <NavLink to="/" className="py-2 block">
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
        </NavLink>
        
      </div>
      <div className={`${isOpen ? "" : ""}`}>
        {navItems.map((item, i) => {
          return(
            <NavLink
              key={i}
              to={`/${item.toLowerCase()}`}
              className={`py-2 flex flex-col static ml-2 duration-500 ease-in-out motion-reduce:transition-none ${
                isOpen ? "animate-fade-in" : "animate-fade-out invisible -mt-20 var(--delay, 0)"
              }`}
              style={{ '--delay': `${i * 0.25}s` } as any}
            >
              <p className="text-tertiary font-medium">{item}</p>
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}
