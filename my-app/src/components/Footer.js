import '../styles/Footer.scss';
import logo from '../logo/LOGO.svg';

export function Footer() {
    return (
        <footer>
            <div className='footerContent'>
            <img alt="logo du site Kasa" src={logo} />
            <p className='legalMentions'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}
