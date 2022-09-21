import React, { useState } from "react";
import { MenuItems } from "./MenuItems"
import { useHistory } from 'react-router-dom';
import './Header.css';
import { Button1 } from './Button1'
const Header = () => {
    const history = useHistory();
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <nav className='HeaderItems' >
            <div className='header-logo'>
            <h1>
                <a className='S3XY' href="/Dtemp">S3XY<i class="fa-solid fa-book"></i></a>
            </h1>
            </div>
            <div className='menu-icon'>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
            </div>
            <p className="title">Your UCSD Toolbox</p>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return <li key={index}><a className={item.cName} href={item.url}>
                        {item.title}
                    </a></li>
                })}

            </ul>
            <Button1>UC San Diego</Button1>
        </nav>
    )
}

export default Header;

