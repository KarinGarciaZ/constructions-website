import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = () => {
  return (
    <div className='service-card'>
      <FontAwesomeIcon icon={faToolbox} className='service-card__icon'/>
      <p className='service-card__title'>Service Title</p>
      <p className='service-card__description'>
        El Lorem Ipsum fue concebido como un texto de relleno, 
        formateado de una cierta manera para permitir la presentación
        de elementos gráficos en documentos, sin necesidad de una copia formal.
      </p>
    </div>
  )
}

export default ServiceCard;