import React from 'react';

import loading from '../Assets/Images/loading.png'

const Loading = () => {
  return (
    <div className='constructions__container'>
      <div className='constructions__container--loading'>
        <img src={loading} alt='loading-icon' className='loading-icon'/>
      </div>
    </div>
  )
}

export default Loading