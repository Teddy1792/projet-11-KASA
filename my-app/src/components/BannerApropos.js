import '../styles/Banner.scss';
import banner from '../img/banner2.png';

export function BannerApropos() {
    return (
        <div className="banner">
            <img alt="une falaise" src={banner} />
        </div>
    );
}