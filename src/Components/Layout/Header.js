import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../Assets/Images/logo.png';

class Header extends Component {

  state = {
    extraClasses: {
      transparent: true,
      active: false
    }
  }

  shouldComponentUpdate( nextProps, nextState ) {
    if( this.state.extraClasses.active !== nextState.extraClasses.active ||  this.state.extraClasses.transparent !== nextState.extraClasses.transparent)
      return true;
    return false;
  }

  listenScrollEvent = e => {
    let classes = { ...this.state.extraClasses }

    if ((window.scrollY > 450) || ((window.scrollY <= 450 && window.scrollY > 250) && classes.active))
      classes.transparent = false;
    else
      classes.transparent = true;
    

    this.setState({extraClasses: classes})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  onHandleMenu = () => {
    let classes = { ...this.state.extraClasses }
    classes.active = !classes.active;
    this.setState({extraClasses: classes})
  }

  render() {
    let classes = ['header'];
    if ( this.state.extraClasses.transparent && this.props.fromHome )
      classes.push('transparent')
    if ( this.state.extraClasses.active )
      classes.push('active')

    return (
      <div className={classes.join(' ')}>
        <div className='company'>
          <img className='company__logo' src={logo} alt='img_logo'/>
          <span className='company__name'>company name</span>
        </div>
        <div className='mobile-menu' onClick={this.onHandleMenu}>
          <div className='mobile-menu-content'></div>
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