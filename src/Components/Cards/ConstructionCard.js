import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle, faHotel, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const ConstructionCard = ( props ) => {
  let construction = props.construction;
  
  let imageUrl = construction.images.filter( image => image.mainImage? true : false )[0].url;

  let classes = ['construction-card'];
  if ( props.cardSize )
    classes.push(props.cardSize);

  return (
    <div className={classes.join(' ')}>
      <img className='construction-card__image' src={imageUrl} alt='Construction img'></img>
      <h3 className='construction-card__title'>{construction.title}</h3>

      <div className='construction-card__info'>
        <FontAwesomeIcon icon={faInfoCircle} className='construction-card__icon'/>
        <p>{construction.statusConstruction}</p>        
      </div>      

      <div className='construction-card__info'>
        <FontAwesomeIcon icon={faHotel} className='construction-card__icon'/>
        <p>{construction.type.name}</p>          
      </div>  

      <div className='construction-card__info'>
        <FontAwesomeIcon icon={faMapMarkerAlt} className='construction-card__icon'/>
        <p>{construction.city}</p>
      </div>          

      <div className='construction-card__info'>
        <FontAwesomeIcon icon={faHandHoldingHeart} className='construction-card__icon'/>
        <p>Happy client</p>
      </div>          
      <button className='btn construction-card__btn' onClick={() => props.clicked( construction.id )}>See Construction</button>
    </div>
  )
}

export default ConstructionCard;