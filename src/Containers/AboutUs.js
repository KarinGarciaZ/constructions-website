import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import DescriptionCard from '../Components/Cards/DescriptionCard';
import EmailSection from '../Components/Sections/Form';
import TeamImage from '../Assets/Images/team.jpg';
import TeamImage2 from '../Assets/Images/team2.jpg';
import TeamImage3 from '../Assets/Images/team3.jpg';
import BusinessImage from '../Assets/Images/businessman.png';
import MB from '../Assets/Images/mb.jpg';

class AboutUs extends Component {
  render() {    
    
    let props = { ...this.props };

    return (
      <div className='about-us'>
        <Header { ...props } />
        <div className='about-us__container'>

          <div className='about-us__title'>
            <span className='about-us__title--text'>About us</span>
          </div>

          <div className='about-us__objectives'>
            <div className='about-us__objectives--img'>
              <img src={TeamImage} alt='team-img' className='about-us__objectives--img-1'/>
              <img src={TeamImage2} alt='team-img' className='about-us__objectives--img-2'/>
              <img src={TeamImage3} alt='team-img' className='about-us__objectives--img-3'/>
            </div>
            <div className='about-us__objectives--team'>
              <DescriptionCard title='Who are we?'>
                Refinery29 is a trailblazing digital-media and entertainment company for young women with a 
                global audience footprint of 550 million across all platforms.
                We deliver style and substance to an audience that's highly engaged across a variety of devices and destinations, 
                from original video and features, to live experiences and social storytelling. Our audience is comprised of determined 
                dreamers who are smart and passionate, always seeking out the full potential in every aspect of their lives.
              </DescriptionCard>
            </div>
            <div className='about-us__objectives--mision'>
              <DescriptionCard title='mision'>
                Refinery29 is a catalyst for women to feel, see, and claim their power.
              </DescriptionCard>
            </div>
            <div className='about-us__objectives--vision'>
              <DescriptionCard title='vision'>
                We deliver optimistic and diverse storytelling, experiences, and points of view to our audience of smart, curious, passionate women.
              </DescriptionCard>
            </div>
          </div>          

          <div className='about-us__team-members'>
            <div className='about-us__team-members--card'>
              <figure className='about-us__team-members--card-shape'>
                <img src={BusinessImage} alt='team-img' />
                <span>Oscar Garcia</span>
              </figure>
              <div className='about-us__team-members--card-text'>
                <h2>President</h2>
                <p>
                  Refinery29 is a trailblazing digital-media and entertainment company for young women with a 
                  global audience footprint of 550 million across all platforms.
                  We deliver style and substance to an audience that's highly engaged across a variety of devices and destinations, 
                  from original video and features, to live experiences and social storytelling.
                </p>
              </div>
            </div>

            <div className='about-us__team-members--card'>
              <figure className='about-us__team-members--card-shape'>
                <img src={MB} alt='team-img' />
                <span>Marcos & Brandon</span>
              </figure>
              <div className='about-us__team-members--card-text'>
                <h2>Managers</h2>
                <p>
                  Refinery29 is a trailblazing digital-media and entertainment company for young women with a 
                  global audience footprint of 550 million across all platforms.
                  We deliver style and substance to an audience that's highly engaged across a variety of devices and destinations, 
                </p>
              </div>
            </div>
          </div>          
          
          <EmailSection classes='background-blue' />

        </div>
      </div>
    )
  }
}

export default AboutUs;