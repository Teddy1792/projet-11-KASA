import { Carousel } from './Carousel';
import { Summary } from './Summary';
import { Menu } from '../Menu'
import apartments from '../../files/logements.json';
import { useParams } from 'react-router-dom';
import '../../styles/ApartmentCard.scss';
import { NotFoundPage } from '../NotFoundPage';


export function ApartmentCard() {
    const { id } = useParams();

    // Find the specific apartment by ID
    const apartment = apartments.find(ap => ap.id === id);

    // If the apartment isn't found, return error message
    if (!apartment) {
        return <NotFoundPage/>
    }

    // Get the description for the 1st menu
    const descriptionAsItem = [{ label: apartment.description }];

    // Get the equipment for the 2nd menu
    const equipmentsAsItems = apartment.equipments.map(equipment => ({ label: equipment }));

    //get the pictures
    const pictures = apartment.pictures;

    return (
        <>
            <Carousel pictures={pictures} />
            <Summary />
            <div className='menusCard'>
                <Menu title="Description" items={descriptionAsItem} pageType="ApartmentCard" />
                <Menu title="Equipments" items={equipmentsAsItems} pageType="ApartmentCard" />
            </div>
        </>
    );
}
