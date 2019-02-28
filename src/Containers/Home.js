import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import ServiceCard from '../Components/Cards/ServiceCard';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header classes='transparent' />
        <div className='image-container'>

        </div>
        <div className='services'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className='about-company'>

        </div>
        <div className='carrucel'>

        </div>
        <div className='contact-us'>
          <div className='contact-us__img'>
            <div className='contact-us__img--form'>

              <h2 className='form-title'>
                Send us an e-mail!
              </h2>

              <div className='form-group'>
                <input type='email' className='input' placeholder='Email' id='email' required />
                <label className='label' htmlFor='email'>Email</label>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;