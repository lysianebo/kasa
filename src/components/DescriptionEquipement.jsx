import { useState } from "react";
import '../styles/pages/_logement.scss';
import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';



export default function DescriptionEquipement(props){
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isEquipementVisible, setIsEquipementVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleEquipement = () => {
    setIsEquipementVisible(!isEquipementVisible);
  };
    
    return (
        <div className='container_description-equipment'>
          <div className='description_equipment'>
          <p className='paragraph_title' onClick={toggleDescription}>
              Description <span className={`chevron ${isDescriptionVisible ? 'open' : ''}`}> &#x2304;</span>
            </p>
            {isDescriptionVisible && <p className='paragraph'>{logement.description}</p>}
          </div>
          <div className='description_equipment'>
            <p className='paragraph_title' onClick={toggleEquipement}>
              Equipement <span className={`chevron ${isEquipementVisible ? 'open' : ''}`} onClick={toggleEquipement}> &#x2304;</span>
            </p>
            {isEquipementVisible && <p className='paragraph open'>{logement.equipments.map((eq, i) => (
              <li key={ i }>{ eq }</li>))}</p>}
          </div>
        </div>
      );  
    }


