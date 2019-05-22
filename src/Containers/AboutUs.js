import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import DescriptionCard from '../Components/Cards/DescriptionCard';
import EmailSection from '../Components/Sections/Form';
import TeamMemberCard from '../Components/Cards/TeamMemberCard';

import TeamImage from '../Assets/Images/team.jpg';
import TeamImage2 from '../Assets/Images/team2.jpg';
import TeamImage3 from '../Assets/Images/team3.jpg';
import BusinessImage from '../Assets/Images/businessman.jpg';
import MB from '../Assets/Images/mb.jpg';

class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {    
    
    let props = { ...this.props };

    return (
      <div className='about-us'>
        <Header { ...props } />
        <div className='about-us__container'>

          <div className='about-us__title'>
            <span className='about-us__title--text'>Us...</span>
          </div>

          <div className='about-us__objectives'>
            <div className='about-us__objectives--img'>
              <img src={TeamImage} alt='team-img' className='about-us__objectives--img-1'/>
              <img src={TeamImage2} alt='team-img' className='about-us__objectives--img-2'/>
              <img src={TeamImage3} alt='team-img' className='about-us__objectives--img-3'/>
            </div>
            <div className='about-us__objectives--team'>
              <DescriptionCard title='ABOUT US?'>
                We are a 100% American company that has been developing projects for more than 25 years, supporting our clients for our great experience and reliability to be the best option in the market.
              </DescriptionCard>
            </div>
            <div className='about-us__objectives--mision'>
              <DescriptionCard title='mision'>
                Provide construction services with the highest quality and best prices, improving the customer's expectations.
              </DescriptionCard>
            </div>
            <div className='about-us__objectives--vision'>
              <DescriptionCard title='vision'>                
                To continue to be a leading company in the area, expanding nationally maintaining the same quality for the good of our customers.
              </DescriptionCard>
            </div>
          </div>          

          <div className='about-us__team-members'>
            <TeamMemberCard rank='President' name='Oscar Garcia' image={BusinessImage}>
              Directs the daily management of the projects and supervises the allocation and development of the labor resources of our company. He was a leader in another important concrete training company in Guadalajara before starting the company with his father and brother.
            </TeamMemberCard>

            <TeamMemberCard rank='Managers' name='Marcos & Brandon' image={MB}>
              They maintain relationships with customers and are responsible for estimating projects both in time and cost. They also provide daily logistical and management support to the different work sites. They have more than twelve years of experience as estimators and project managers.
            </TeamMemberCard>
          </div>          
          
          <EmailSection classes='background-blue' />

        </div>
      </div>
    )
  }
}

export default AboutUs;