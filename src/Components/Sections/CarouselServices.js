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
        <h2 className='services__title u-title-2'>¡Somos tu mejor opción!</h2>
        <ServiceCard title='Mejor Servicio' icon={icon1}>
          Usamos herramientas y maquinaria de alta tecnología para ofrecer un rápido, seguro y mejor servicio a nuestros clientes.
        </ServiceCard>
        <ServiceCard title='Profesionalidad' icon={icon2}>
          Ofrecemos servicios de alta calidad con personal 100% profesional en cada uno de nuestros proyectos.
        </ServiceCard>
        <ServiceCard title='Accesibilidad' icon={icon3}>
          Manejamos los mejores precios del mercado en el país, dejando a nuestros clientes satisfechos con el buen resultado otorgado.
        </ServiceCard>
        <ServiceCard title='Seguridad' icon={icon4}>
          Servicios 100% seguros, somos una empresa transparente con contratos seguros.
        </ServiceCard>
      </section>
    )
  }
}

export default CarouselServices;