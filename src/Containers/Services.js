import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import axios from '../axios-connection';

class Services extends Component {

  state = {
    services: []
  }

  componentDidMount() {
    axios.get( '/service' )
    .then( resp => {
      this.setState({ services: resp.data })
    })
    .catch( err => console.log(err.response))
  }

  onCardClicked = ( id ) => {
    this.props.history.push( '/service/' + id )
  }

  render() {

    let services = [ ...this.state.services ];
    let props = { ...this.props };

    let arrayCards = services.map( service => {
      let imageUrl = 'http://localhost:3001/' + service.image;
      return (
        <div className='services-container__cards--card' key={service.id} onClick={this.onCardClicked.bind( this, service.id )} >
          <img src={imageUrl} alt='img-service' className='services-container__cards--card-img' />
          <p className='services-container__cards--card-name'>{service.name}</p>
        </div>
      )
    })

    return (
      <div className='services-container'>
        <Header { ...props }/>
        <div className='about-us__title'>
          <span className='about-us__title--text'>Our Services</span>
        </div>
        <div className='services-container__cards'>
          {arrayCards}
        </div>
      </div>
    )
  }
}

export default Services;