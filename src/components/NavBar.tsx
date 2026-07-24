import "../index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="p-6 flex items-baseline justify-between bg-bg-elevated rounded-xl grow-0 shrink sticky top-0 z-50 shadow">
      <NavLink to="/">
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="Logo"
          className="h-10 w-10 inline-block mr-2"
        />
      </NavLink>
      <div className="font-mono text-2xl flex space-x-8 text-text-primary">
        <NavLink
          to="/"
          className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Resume
        </NavLink>
        <NavLink
          to="/about"
          className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          About
        </NavLink>
        <NavLink
          to="/notes"
          className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Notes
        </NavLink>
        <NavLink
          to="/contact"
          className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
