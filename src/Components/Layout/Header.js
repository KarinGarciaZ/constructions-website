import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
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

    if ( ( (window.scrollY > 200) || (( window.scrollY > 50) && classes.active) ) && classes.transparent ) {
      classes.transparent = false;
      this.setState({extraClasses: classes})      
    }

    if ( classes.active ) {
      if ( (window.scrollY < 50)  && !classes.transparent ) {
        classes.transparent = true;
        this.setState({extraClasses: classes})
      }   
    } else {
      if ( (window.scrollY < 200)  && !classes.transparent ) {
        classes.transparent = true;
        this.setState({extraClasses: classes})
      }   
    }  

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  onHandleMenu = () => {
    let classes = { ...this.state.extraClasses }
    classes.active = !classes.active;
    this.setState({extraClasses: classes})
  }

  goToHome = () => {
    this.props.history.push('/')
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
          <img className='company__logo' src={logo} alt='img_logo' onClick={this.goToHome}/>
          <span className='company__name' onClick={this.goToHome}>Company Name</span>
        </div>
        { this.props.optionsIcon? 
          <FontAwesomeIcon icon={faSlidersH} className='header__settings' onClick={this.props.iconClicked}/> 
          : null
        }
        <div className='mobile-menu' onClick={this.onHandleMenu}>
          <div className='mobile-menu-content'></div>
        </div>
        <NavLink to='/all-constructions' activeClassName='nav-active' className='nav line-top' >
          Constructions
        </NavLink>
        <NavLink to='/all-services' activeClassName='nav-active' className='nav' >
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