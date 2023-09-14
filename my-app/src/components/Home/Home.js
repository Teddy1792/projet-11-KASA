import { Thumbnails } from './Thumbnails';
import { Banner } from '../Banner';
import bannerImage from '../../img/banner.png';

export function Home() {
    return (
        <>
            <Banner text1="Chez vous," text2=" c'est partout et ailleurs" imgSrc={bannerImage} />
            <Thumbnails />
        </>
    );
}