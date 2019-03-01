import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className='service-card'>
      {props.icon}
      <p className='service-card__title'>{props.title}</p>
      <p className='service-card__description'>
        {props.children}
      </p>
    </div>
  )
}

export default ServiceCard;