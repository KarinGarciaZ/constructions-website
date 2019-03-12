import React from 'react'

const TeamMemberCard = (props) => {
  return (
    <div className='about-us__team-members--card'>
      <figure className='about-us__team-members--card-shape'>
        <img src={props.image} alt='team-img' />
        <span>{props.name}</span>
      </figure>
      <div className='about-us__team-members--card-text'>
        <h2>{props.rank}</h2>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  )
}

export default TeamMemberCard;