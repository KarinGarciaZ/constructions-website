import React from 'react';

import img404 from '../Assets/Images/404.jpg';

const NoData = (props) => {
  return (
    <div className='no-data'>
      <img src={img404} alt='loading-icon' className='img404'/>
      <p>No pudimos encontrar {props.item}</p>
    </div>
  )
}

export default NoData