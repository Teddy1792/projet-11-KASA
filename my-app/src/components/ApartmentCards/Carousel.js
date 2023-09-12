import React, { useState } from 'react';
import '../../styles/Carousel.scss';
import { ReactComponent as ArrowBack } from '../../img/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../img/arrow_forward.svg';

export function Carousel(props) {
    const { pictures } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrev() {
        const nextIndex = currentIndex <= 0 ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(nextIndex);
    }

    function handleNext() {
        const nextIndex = (currentIndex + 1) % pictures.length;
        setCurrentIndex(nextIndex);
    }

    return (
        <div className="carousel">
            {pictures.length > 1 && (
                <>
                    <button className='buttonLeft' onClick={handlePrev}><ArrowBack alt='arrow to the left'/></button>
                    <p className='counter'>{currentIndex+1}/{pictures.length}</p>
                    <button className='buttonRight' onClick={handleNext}><ArrowForward alt='arrow to the right'/></button>
                </>
            )}
            <div className="image-container">
                <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
        </div>
    );
}
