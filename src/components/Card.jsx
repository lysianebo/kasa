import React from 'react';
import { Link } from 'react-router-dom'


export default function Card ({ id, title, cover }) {
  return (
    <div className="card_logement">
        <Link to={`/logements/${id}`}>
            <div>
                <img src={cover} alt="{title}" />
            </div>
            <div className="background_title">
                <h2 className='logement_title'>{title}</h2>
            </div>
        </Link>
    </div>
);
}

       
   