import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import EmailSection from '../Components/Sections/Form';
import AboutCompanySection from '../Components/Sections/AboutCompany';
import CarruselConstructions from '../Components/Sections/CarruselConstructions';
import CarouselServices from '../Components/Sections/CarouselServices';


class Home extends Component { 

  render() {

    return (
      <div className='home'>
        <Header fromHome={true} />

        <div className='image-container'></div>

        <CarouselServices />

        <AboutCompanySection />

        <CarruselConstructions { ...this.props } />

        <EmailSection />
      </div>
    )
  }
}

export default Home;