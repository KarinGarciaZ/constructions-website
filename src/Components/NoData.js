import React from 'react';

import img404 from '../Assets/Images/404.jpg';

const NoData = (props) => {
  return (
    <div className='constructions__container'>
      <div className='constructions__container--none'>
        <img src={img404} alt='loading-icon' className='img404'/>
        <p>We couldn't find {props.item} with these characteristics.</p>
      </div>
    </div>
  )
}

export default NoData