
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

import "./style.css";

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>My first Website :3</strong>

                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}><strong>Home</strong></NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}><strong>Projects</strong></NavLink>
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}><strong>Contacts</strong></NavLink>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;