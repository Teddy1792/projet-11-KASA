import '../../styles/Summary.scss';
import apartments from '../../files/logements.json';
import { useParams } from 'react-router-dom';
import Star from './Star';

export function Summary() {
    const { id } = useParams();
    const apartment = apartments.find(ap => ap.id === id);

    const rating = Number(apartment.rating);

    const ratingsDisplay = (rating) => {
        return (
            <div>
                {Array.from({ length: rating }).map((_, index) => (
                    <Star className="filled star" key={index} alt={`${rating} Star Rating`} />
                ))}
                {Array.from({ length: 5 - rating }).map((_, index) => (
                    <Star className="unfilled star" key={index + rating} alt="Empty Star" />
                ))}
            </div>
        );
    };
    

    return (
        <div className="summary">
            <div className='titleContainer'>
                <div className='titles'>
                    <h1>{apartment.title}</h1>
                    <h2>{apartment.location}</h2>
                </div>
                <div className='tags'>
                    {apartment.tags.map((tag, index) => (
                    <div key={index} className="tag">{tag}</div>
                        ))}
                </div>
            </div>
            <div className='host'>
                    <div className='hostText'><p>{apartment.host.name}</p>
                    <img src={apartment.host.picture} alt={`portrait de ${apartment.host.name}`}/></div>
                    <div className='stars'>
                        {ratingsDisplay(rating)}
                    </div>
            </div>
        </div>
    );
}