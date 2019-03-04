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
        <h2 className='services__title u-title-2'>We are your best choice!</h2>
        <ServiceCard title='Best Service' icon={icon1}>We use high technology tools and machines to give a better, safe and faster service to our clients.</ServiceCard>
        <ServiceCard title='Best Service' icon={icon2}>We offer a high quality service with a profesional personal. We offer a high quality service with a profesional personal.</ServiceCard>
        <ServiceCard title='Best Service' icon={icon3}>We have the best price in market. We have the best price in market. We have the best price in market. We have the best price in market.</ServiceCard>
        <ServiceCard title='Best Service' icon={icon4}>Constructions 100% secure, we are a trustable company. Constructions 100% secure, we are a trustable company.</ServiceCard>
      </section>
    )
  }
}

export default CarouselServices;