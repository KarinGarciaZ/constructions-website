import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from '../Components/Layout/Header';
import EmailSection from '../Components/Sections/Form';
import AboutCompanySection from '../Components/Sections/AboutCompany';
import CarruselConstructions from '../Components/Sections/CarruselConstructions';
import CarouselServices from '../Components/Sections/CarouselServices';


class Home extends Component { 

  render() {
    
    let props = { ...this.props };

    return (
      <div className='home'>
        <Header fromHome={true} {...props}/>

        <div className='image-container'>
          <div className='midcontainer'>
            <p className='text--image'>your best option!</p>
            <Link to='/all-constructions' className='btn--image'>Discover our constructions</Link>
          </div>          
        </div>

        <CarouselServices />

        <AboutCompanySection { ...props }/>

        <CarruselConstructions { ...props } />

        <EmailSection />
      </div>
    )
  }
}

export default Home;