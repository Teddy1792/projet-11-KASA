import React, { useState } from 'react';
import '../styles/Menu.scss';
import arrow from '../img/arrow_up.svg'

export function Menu({ title, items, pageType }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`dropdown ${pageType} ${isOpen ? 'open opened' : ''}`}>
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
                <img className={`arrowMenu ${isOpen ? 'up' : 'down'}`} src={arrow} alt="arrow to open and close"/>
            </button>
            <div className={`dropdown-menu ${pageType} ${isOpen ? 'show' : 'hide'}`}>
    {items.map(item => (
        <p key={item.label}>{item.label}</p>
    ))}
</div>

        </div>
    );
}

