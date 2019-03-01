import React, { Component } from 'react';
import employeeImage from '../../Assets/Images/employee.jpg';
import architectsImage from '../../Assets/Images/architects.jpg';

class AboutCompany extends Component {
  render() {
    return (
      <div className='about-company'>
        <div className='about-company__pictures'>
          <img className='about-company__pictures--big' alt='big-img' src={employeeImage}/>
          <img className='about-company__pictures--small' alt='big-img' src={architectsImage}/>
        </div>
        <div className='about-company__info'>
          <h2 className='u-title-2'>Something about us...</h2>
          <p className='u-text-16'>
            We are always maintaining our status as an industry leader, 
            being the premier choice for both construction contractors and developers.
            We continuously strive to deliver the best, 
            most cost-effective concrete products and services.
          </p>
          <p className='about-company__info--message'>
            "We'll be the best decision in your life."
          </p>
          <button className='btn about-company__info--btn'>Know more about us</button>
        </div>
      </div>
    )
  }
}

export default AboutCompany;