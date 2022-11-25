import './Footer.css'
function Footer({showModal, setShowModal, theme, setTheme, dark}) {
    return (
        <footer className={`footer footer-${dark}`}>
            <ul className="footer__list footer__social">
                <li><a href='/' onClick={(e) => { e.preventDefault();
                setShowModal(!showModal);}}>Contact me</a></li>
            </ul>
            <button className='footer-button' onClick={() => {setTheme(!theme)}} aria-label={theme? "Dark Theme" : "Light Theme"}>Change Theme</button>
        </footer>
    );
}

export default Footer;