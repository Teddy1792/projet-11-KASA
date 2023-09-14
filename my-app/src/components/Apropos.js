import { Banner } from './Banner';
import bannerImage from '../img/banner2.png'
import React from 'react';
import { Menu } from './Menu';
import '../styles/Apropos.scss';

export function Apropos() {
    const fiabilite = [{ label:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}];
    const respect = [{ label:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}];
    const service = [{ label:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}];
    const sercurite = [{ label:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}];
    return (
        <>
            <Banner text="" imgSrc={bannerImage} />
            <div className='menusApropos'>
                <Menu title="Fiabilité" items={fiabilite} pageType="Apropos" />
                <Menu title="Respect" items={respect} pageType="Apropos" />
                <Menu title="Service" items={service} pageType="Apropos" />
                <Menu title="Sécurité" items={sercurite} pageType="Apropos" />
            </div>
        </>
    );
}
