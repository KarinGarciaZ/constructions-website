import React, { Component } from 'react';
import Header from '../Components/Layout/Header';

class AboutUs extends Component {
  render() {    
    
    let props = { ...this.props };

    return (
      <div className='about-us'>
        <Header { ...props } />
        <div className='about-us__container'>

        </div>
      </div>
    )
  }
}

export default AboutUs;