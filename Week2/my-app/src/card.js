import React from 'react';
import './card.css'

export default function Card(){
    //Can reference JS variables using {} inside of HTML
    const text = 'Blastoid';
    const texth2 = 'Pikachu!';
    return(
        <div className='card'>
            <h2>{texth2}</h2>
            {text}
        </div>
    )
}
