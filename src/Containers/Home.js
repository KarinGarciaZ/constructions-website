import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faUserCog, faHandHoldingUsd, faLock } from "@fortawesome/free-solid-svg-icons";

import Header from '../Components/Layout/Header';
import ServiceCard from '../Components/Cards/ServiceCard';
import EmailSection from '../Components/Sections/Form';
import AboutCompanySection from '../Components/Sections/AboutCompany';
import CarruselConstructions from '../Components/Sections/CarruselConstructions';


class Home extends Component { 

  state = {
    colorHeader: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 450) {
      this.setState({colorHeader: ''})
    } else {
      this.setState({colorHeader: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  shouldComponentUpdate( nextProps, nextState ) {
    if( this.state.colorHeader !== nextState.colorHeader )
      return true;
    return false;
  }

  render() {

    let icon1 = <FontAwesomeIcon icon={faToolbox} className='service-card__icon'/>
    let icon2 = <FontAwesomeIcon icon={faUserCog} className='service-card__icon'/>
    let icon3 = <FontAwesomeIcon icon={faHandHoldingUsd} className='service-card__icon'/>
    let icon4 = <FontAwesomeIcon icon={faLock} className='service-card__icon'/>

    return (
      <div className='home'>
        <Header classes={this.state.colorHeader} />

        <div className='image-container'></div>

        <div className='services'>
          <h2 className='services__title u-title-2'>We are your best choice!</h2>
          <ServiceCard title='Best Service' icon={icon1}>We use high technology tools and machines to give a better, safe and faster service to our clients.</ServiceCard>
          <ServiceCard title='Best Service' icon={icon2}>We offer a high quality service with a profesional personal.</ServiceCard>
          <ServiceCard title='Best Service' icon={icon3}>We have the best price in market.</ServiceCard>
          <ServiceCard title='Best Service' icon={icon4}>Constructions 100% secure, we are a trustable company.</ServiceCard>
        </div>

        <AboutCompanySection />

        <CarruselConstructions { ...this.props } />

        <EmailSection />
      </div>
    )
  }
}

export default Home;