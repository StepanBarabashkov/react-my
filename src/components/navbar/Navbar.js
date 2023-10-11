import "./style.css";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeLink ='nav-list__link nav-list__link--active';
    const normalLink ='nav-list__link';
    
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>My first Website :3</strong>

                    </NavLink>

                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>

                    <ul className="nav-list">
                        <NavLink to="/" className={({isActive})=> isActive ? activeLink : normalLink}><strong>Home</strong></NavLink>
                        <NavLink to="/projects"  className={({isActive})=> isActive ? activeLink : normalLink}><strong>Projects</strong></NavLink>
                        <NavLink to="/contacts"  className={({isActive})=> isActive ? activeLink : normalLink}><strong>Contacts</strong></NavLink>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;