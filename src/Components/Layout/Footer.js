import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../Assets/Images/facebook.png';
import twitter from '../../Assets/Images/twitter.png';
import instagram from '../../Assets/Images/instagram.png';
import linkedin from '../../Assets/Images/linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faLaptop } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__container'>

          <div className='footer__container--contact'>
            <p className='footer__container--contact-title'>Contact companyname</p>          
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
              <p>email@companyname.com</p>
            </div>
          </div>

          <div className='footer__container--contact'>
            <p className='footer__container--contact-title'>Navigate</p>
            <Link to='/all-constructions' className='footer__container--contact-link'>our constructions</Link>
            <Link to='/' className='footer__container--contact-link'>our services</Link>
            <Link to='/about-us' className='footer__container--contact-link'>About us</Link>
          </div>   

          <div className='footer__container--contact'>
            <p className='footer__container--contact-title'>keep connected!</p>
            <p className='footer__container--contact-socialtext'>Keep connected in our social media to know all our news about jobs and constructions.</p>
            <div className='footer__container--contact-socialicons'>
              <a href='https://www.facebook.com/'><img src={facebook} alt='face-icon' className='social-icon'/></a>
              <a href='https://www.twitter.com/'><img src={twitter} alt='twitter-icon' className='social-icon social-icon-twitter'/></a>
              <a href='https://www.instagram.com/'><img src={instagram} alt='instagram-icon' className='social-icon'/></a>
              <a href='https://www.linkedin.com/'><img src={linkedin} alt='linkedin-icon' className='social-icon'/></a>
            </div>
          </div>          

        </div>

        

        <div className='footer__copyright'>
          <div className='footer__container--contact-item'>            
            <FontAwesomeIcon icon={faLaptop} className='contact-icon'/>
            <p className='footer__copyright--text'>&copy;Created by <a href='https://github.com/KarinGarciaZ'>Oscar Jovanny Garcia Zepeda</a>. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;