import { NavLink } from "@remix-run/react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <header className="flex items-start flex-col p-6">
        <NavLink to="/" className="block static ">
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
        <div
          className={`py-1 flex flex-col static ml-2 duration-1000 ease-in-out motion-reduce:transition-none ${
            isOpen ? "" : "invisible -mt-20"
          }`}
        >
          <NavLink
            to="/about"
            className=""
          >
            Kick
          </NavLink>
          <NavLink
            to="/portfolio"
          >
            Rocks
          </NavLink>
          <NavLink
            to="/resume"
          >
            Loser
          </NavLink>
        </div>
    </header>
  );
}
