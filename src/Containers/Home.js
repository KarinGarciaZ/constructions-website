import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import ServiceCard from '../Components/Cards/ServiceCard';
import EmailSection from '../Components/Sections/Form';

class Home extends Component { 

  render() {
    return (
      <div className='home'>
        <Header classes='transparent' />
        <div className='image-container'>

        </div>
        <div className='services'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className='about-company'>

        </div>
        <div className='carrucel'>
          
        </div>
        <EmailSection />
      </div>
    )
  }
}

export default Home;