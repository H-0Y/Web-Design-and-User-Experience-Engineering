import GlobalNav from "./GlobalNav";
import "./Header.css"
import logo from "./images/logo.jpg"
function Header({go, dark}) {
    return (
        <header className={`header header-${dark}`}>
            <img
                src={logo}
                className="header__logo"
                alt="My animated portrait as a logo"
            />
            <h1 className="header__title">
                My Travel Blog
            </h1>
            <GlobalNav go={go} className="header__nav" dark={dark}/>
        </header>
    );
}

export default Header;
