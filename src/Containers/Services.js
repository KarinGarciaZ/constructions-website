import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import axios from '../axios-connection';
import Loading from '../Components/Loading';
import NoData from '../Components/NoData';

class Services extends Component {

  state = {
    services: [],
    load: 'loading'
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    axios.get( '/service' )
    .then( resp => {
      let load = resp.data.length? 'services' : 'none';
      this.setState({ services: resp.data, load })
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
      let imageUrl = service.image;
      return (
        <div className='services-container__cards--card' key={service.id} onClick={this.onCardClicked.bind( this, service.id )} >
          <img src={imageUrl} alt='img-service' className='services-container__cards--card-img' />
          <p className='services-container__cards--card-name'>{service.name}</p>
        </div>
      )
    })

    let content = this.state.load;
    let loadContent = null;
    switch (content) {
      case 'loading':
        loadContent = <Loading />
        break;
      case 'services':
        loadContent =  arrayCards;
        break;
      case 'none':
        loadContent = <NoData item='Servicios con estas características.' />
        break;
    
      default:
        loadContent = <Loading />
        break;
    }


    return (
      <div className='services-container'>
        <Header { ...props }/>
        { content === 'services'? <div className='about-us__title'>
          <span className='about-us__title--text'>Nuestros servicios</span>
        </div> : null}
        <div className='services-container__cards'>
          {loadContent}
        </div>
      </div>
    )
  }
}

export default Services;