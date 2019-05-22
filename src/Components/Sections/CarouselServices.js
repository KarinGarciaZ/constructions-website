import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faUserCog, faHandHoldingUsd, faLock } from "@fortawesome/free-solid-svg-icons";

import ServiceCard from '../Cards/ServiceCard';

class CarouselServices extends Component {
  render() { 

    let icon1 = <FontAwesomeIcon icon={faToolbox} className='service-card__icon'/>
    let icon2 = <FontAwesomeIcon icon={faUserCog} className='service-card__icon'/>
    let icon3 = <FontAwesomeIcon icon={faHandHoldingUsd} className='service-card__icon'/>
    let icon4 = <FontAwesomeIcon icon={faLock} className='service-card__icon'/>

    return (
      <section className='services'>
        <h2 className='services__title u-title-2'>Why Us?</h2>
        <ServiceCard title='Best Service' icon={icon1}>          
          We use high technology tools and machinery to offer a fast, safe and better service to our customers. 
        </ServiceCard>
        <ServiceCard title='Professionalism' icon={icon2}>
          We offer high quality services with 100% professional staff in each of our projects.
        </ServiceCard>
        <ServiceCard title='Accessibility' icon={icon3}>          
          We handle the best market prices in the country, leaving our customers satisfied with the good result.    
        </ServiceCard>
        <ServiceCard title='Security' icon={icon4}>          
          100% secure services, we are a transparent company with secure contracts.
        </ServiceCard>
      </section>
    )
  }
}

export default CarouselServices;