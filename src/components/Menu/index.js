import React from 'react';
import Logo from '../../assets/image/Logo.png'
import ButtonLink from './components/ButtonLink'
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Feflix logo" className="Logo"/>
            </a>

            <ButtonLink href="/" className="ButtonLink">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;