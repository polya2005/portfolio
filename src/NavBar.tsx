import "./index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="p-6 flex items-baseline justify-between bg-bg-primary rounded-xl">
            <NavLink to="/" className="font-mono text-2xl text-accent-bright">
                Than Thanpanit
            </NavLink>
            <div className="font-mono text-2xl flex space-x-8 text-text-primary">
                <NavLink to="/" className="hover:text-accent">
                    Home
                </NavLink>
                <NavLink to="/projects" className="hover:text-accent">
                    Projects
                </NavLink>
                <NavLink to="/resume" className="hover:text-accent">
                    Resume
                </NavLink>
                <NavLink to="/about" className="hover:text-accent">
                    About
                </NavLink>
                <NavLink to="/notes" className="hover:text-accent">
                    Notes
                </NavLink>
                <NavLink to="/contact" className="hover:text-accent">
                    Contact
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;
