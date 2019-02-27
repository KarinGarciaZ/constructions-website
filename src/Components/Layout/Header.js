import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../Assets/Images/logo.png';

class Header extends Component {
  render() {

    let classes = ['header']
    if( this.props.classes )
      classes.push(this.props.classes)

    return (
      <div className={classes.join(' ')}>
        <div className='company'>
          <img className='company__logo' src={logo} alt='img_logo'/>
          <span className='company__name'>company name</span>
        </div>
        <NavLink to='/all-constructions' activeClassName='nav-active' className='nav' >
          Our Constructions
        </NavLink>
        <NavLink to='/' activeClassName='nav-active' className='nav' >
          Our Services
        </NavLink>
        <NavLink to='/about-us' activeClassName='nav-active' className='nav' >
          About Us
        </NavLink>
      </div>
    )
  }
}

export default Header;