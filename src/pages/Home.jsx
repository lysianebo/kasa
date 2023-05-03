import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Containerchezvous from '../components/Containerchezvous'
import Galery from '../components/Galery';

const Home = () => {
    return (
       <div className='home'>
        <Header />
        <Containerchezvous />
        <Galery /> 
        <Footer />
       </div>
      
          
    )
};

export default Home;