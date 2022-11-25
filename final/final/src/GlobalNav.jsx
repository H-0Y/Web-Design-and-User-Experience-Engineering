import menu from './menu';
import './GlobalNav.css';
import { useState } from 'react';
import './gg.css';
function GlobalNav({go, className, dark}) {
    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a 
                className="global-nav__link" 
                href={item.path}
                onClick={go}
                >
                    {item.name}
                </a>
            </li>
        )
    });
    

    const showClass = showMenu ? 'global-nav__list--open' : '';
    const menuHtml = (
        
            <ul className={`global-nav__list ${showClass} list-${dark}`}>
                {list}
            </ul>
            
    )
    
    return (
        
        <nav className={`global-nav ${className}`}>
            <button 
                className='global-nav__button'
                onClick={() => {
                    setShowMenu(!showMenu);
                }}
                aria-label={showMenu? "Close Menu" : "Open Menu"}
            ><i className='gg-menu'/></button> 

            {showMenu && menuHtml}
        </nav>
    );
}

export default GlobalNav;