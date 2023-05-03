import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/caroussel';
import DescriptionEquipment from '../components/DescriptionEquipement';
import Error from './Error'
import '../styles/pages/_logement.scss';

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  return (

    <div className='logement_page'>
      <Header />
      <Carousel pictures={logement.pictures} />
     
      <div className='logement_title_owner'>
        <div className='logement_title'>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          
          <div className='tags'>{logement.tags.map((tag, i)=>( <span key={ i }>{ tag }</span>))}
</div>
        </div>
        <div className='logement_owner'>
          <div className='rating-stars'>
            {[1, 2, 3, 4, 5].map((num)=> <span className={logement.rating >= num ? "star on" : "star off"}>★</span>)}
          </div>
          <div className='owner'>
            <h3>{logement.host.name}</h3>
            <img className='logement_owner-badge' src={logement.host.picture} alt='' />
          </div>
        </div>
      </div>
      <div className='container_description-equipment'>
        <DescriptionEquipment />
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
