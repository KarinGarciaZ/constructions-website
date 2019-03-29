import React, { Component } from 'react';

import axios from '../axios-connection';
import Header from '../Components/Layout/Header';
import NoData from '../Components/NoData';


class Service extends Component {
  state = {
    service: {},
    notFound: false
  }

  componentDidMount() {

    let id = this.props.match.params.id

    axios.get( '/service/' + id )
    .then( resp => {
      this.setState({ service: resp.data })
    })
    .catch( error => {
      console.log('error: ', error.response);
      this.setState({ notFound: true })
    })
  }

  render() {

    let service = { ...this.state.service };    
    let props = { ...this.props };    
    let imageUrl = 'http://localhost:3001/' + service.image;

    return (
      <div className='service'>
        <Header { ...props }/>
        { service.image? <div className='service__container'>
          <img src={imageUrl} className='service__container--img' alt='img-service'/>
          <p className='service__container--name'>{service.name}</p>
          <p className='service__container--description'>{service.description}</p>
        </div> : null}
        { this.state.notFound? <NoData item='this service.'/> : null }
      </div>
    )
  }
}

export default Service