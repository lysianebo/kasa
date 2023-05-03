import React from 'react';
import  '../styles/components/_galery.scss';
import { Link } from 'react-router-dom'
import Card from './Card';
import logement from "../data/logements.json";


export default function Galery() {
 return (
    <div className='galery'>
    {logement.map((logement) => {
          return (
              <Card classname='card_logement' key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}  />
              
          )
      })}
      <Link to={`/Logement/${logement.id}`}>En savoir plus</Link>
  </div>
);
}

