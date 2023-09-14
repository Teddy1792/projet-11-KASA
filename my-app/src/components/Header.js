import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../logo/LOGO.svg';

export function Header() {
    return (
        <header>
            <NavLink to={"/"}>
                <img alt="logo du site Kasa" src={logo} />
            </NavLink>
            <div className="text-header">
                <NavLink 
                    to="/" 
                    className="text-accueil" 
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/Apropos" 
                    className="text-apropos" 
                >
                    A Propos
                </NavLink>
            </div>
        </header>
    );
}
