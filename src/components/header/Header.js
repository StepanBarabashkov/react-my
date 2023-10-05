import "./style.css";
const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Stepa</em></strong><br />
                    a Novice Programmer
                </h1>
                <div className="header__text">
                    <p><strong>With Passion for Learning and Creating.</strong></p>
                </div>
                <a href="#!" className="btn"><strong>Nothing :3</strong> </a>
            </div>
        </header>
    );
}

export default Header;