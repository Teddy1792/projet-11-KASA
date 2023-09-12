import '../../styles/Thumbnails.scss';
import apartments from '../../files/logements.json';
import { Link } from 'react-router-dom';

export function Thumbnails() {
    return (
        <nav className="thumbnails">
            {apartments.map(apartment => (
                <div key={apartment.id} className="thumbnail">
                    <Link to={`/ApartmentCard/${apartment.id}`}>
                        <img src={apartment.cover} alt={apartment.title} />
                    </Link>
                    <div className="thumbnail-description">{apartment.title}</div>
                </div>
            ))}
        </nav>
    );
}