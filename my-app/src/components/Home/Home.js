import { Header } from '../Header';
import { Thumbnails } from './Thumbnails';
import { Footer } from '../Footer'
import { Banner } from '../Banner';
import bannerImage from '../../img/banner.png';

export function Home() {
    return (
        <>
            <Header />
            <Banner text1="Chez vous," text2=" c'est partout et ailleurs" imgSrc={bannerImage} />
            <Thumbnails />
            <Footer/>
        </>
    );
}