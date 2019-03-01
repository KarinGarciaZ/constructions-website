import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import ServiceCard from '../Components/Cards/ServiceCard';
import EmailSection from '../Components/Sections/Form';
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
    return (
      <div className='home'>
        <Header classes={this.state.colorHeader} />
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
        <CarruselConstructions { ...this.props } />
        <EmailSection />
      </div>
    )
  }
}

export default Home;