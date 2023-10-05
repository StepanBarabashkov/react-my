import "./style.css";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <a href="./index.html" className="logo"> <strong>My first Website :3</strong></a>

                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active"><strong>Home</strong></a></li>
                        <li className="nav-list__item"><a href="./projects.html" className="nav-list__link"><strong>Projects</strong></a></li>
                        <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link"><strong>Contacts</strong></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;