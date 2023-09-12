import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../logo/LOGO.svg';

//https://reactrouter.com/en/main/components/nav-link : pour se passer de isactive

export function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <Link to={"/"}>
                <img alt="logo du site Kasa" src={logo} />
            </Link>
            <div className="text-header">
            <Link to="/" className={isActive('/') ? 'active text-accueil' : 'text-accueil'}>
                    Accueil
                </Link>
                <Link to="/Apropos" className={isActive('/Apropos') ? 'active text-apropos' : 'text-apropos'}>
                    A Propos
                </Link>
            </div>
        </header>
    );
}
