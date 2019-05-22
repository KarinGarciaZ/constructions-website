import React, { Component } from 'react';
import employeeImage from '../../Assets/Images/employee.jpg';
import architectsImage from '../../Assets/Images/architects.jpg';

class AboutCompany extends Component {

  handleClick = () => {
    this.props.history.push('/about-us');
  }

  render() {
    return (
      <div className='about-company'>
        <div className='about-company__pictures'>
          <img className='about-company__pictures--big' alt='big-img' src={employeeImage}/>
          <img className='about-company__pictures--small' alt='big-img' src={architectsImage}/>
        </div>
        <div className='about-company__info'>
          <h2 className='u-title-2'>About Us...</h2>
          <p className='u-text-16'>
            We remain industry leaders being the best choice for our excellent performance. Offering development services for more than 25 years.
          </p>
          <p className='about-company__info--message'>
            "Let us be your best decision."
          </p>
          <button className='btn about-company__info--btn' onClick={this.handleClick}>Know more about us</button>
        </div>
      </div>
    )
  }
}

export default AboutCompany;