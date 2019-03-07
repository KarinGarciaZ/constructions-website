import React from 'react'

const DescriptionCard = (props) => {
  return (
    <div className='description-card'>
      <p className='description-card__title'>{props.title}</p>
      <p className='description-card__content'>{props.children}</p>
    </div>
  )
}

export default DescriptionCard;