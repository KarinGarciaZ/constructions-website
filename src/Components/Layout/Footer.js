import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faLaptop } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__container'>

          <div className='footer__container--contact'>          
            <div className='footer__container--contact-item'>            
              <FontAwesomeIcon icon={faMapMarkerAlt} className='contact-icon'/>
              <p>12654 Pacific St.</p>
            </div>
            <div className='footer__container--contact-item'>            
              <FontAwesomeIcon icon={faPhone} className='contact-icon'/>
              <p>341 437 39 91</p>
            </div>
            <div className='footer__container--contact-item'>            
              <FontAwesomeIcon icon={faEnvelope} className='contact-icon'/>
              <p>emailaddress@companyname.com</p>
            </div>
          </div>

          <div className='footer__container--contact'>
            
          </div>

          <div className='footer__container--contact'>
            <div className='footer__container--contact-item'>            
              <FontAwesomeIcon icon={faLaptop} className='contact-icon'/>
              <p><a href='https://github.com/KarinGarciaZ'>&copy;Oscar Jovanny Garcia Zepeda</a></p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Footer;