import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import  '../styles/pages/_about.scss';
import { useState } from "react";
import dataAbout from '../data/dataAbout.json';

const About = () => {
    const [isOpen, setIsOpen] = useState(new Array(dataAbout.length).fill(false));
  
    const toggleDescription = (index) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };
  
    return (
        <div>
            <Header />
            <div className='container_about'></div>
            <div>
                <div className="informations">
                    {dataAbout.map((info, index) => (
                    <div className="information_title" key={index}>
                        <h4 className="paragraph_title" onClick={() => toggleDescription(index)}>
                        {info.title}{' '}
                      
                        <span
                            className={`chevron ${isOpen[index] ? 'open' : ''}`}
                            onClick={() => toggleDescription(index)}
                        >
                            {' '}
                            &#x2304;
                        </span>
                        
                        </h4>
                        {isOpen[index] && <p className="paragraph">{info.description}</p>}
                    </div>
                    ))}
                </div>
            </div>
            <Footer />
      </div>
    );
};
  
export default About;

