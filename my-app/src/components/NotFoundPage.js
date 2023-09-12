import React from 'react';
import '../styles/NotFoundPage.scss';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const NotFoundPage = () => {
    return (
        <>
        <Header />
        <div className='error'>
            <p className='errorNumber' >404</p>
            <p className='errorMessage' >Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>
                <p className='homePage'>Retourner sur la page d’accueil</p>
            </Link>
        </div>
        <Footer/>
        </>
        )
}