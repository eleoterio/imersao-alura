import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/Logo.png'
import Button from '../Button/'
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="Feflix logo" className="Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;