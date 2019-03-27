import React, { Component } from 'react';

import axios from '../axios-connection';
import Header from '../Components/Layout/Header';

class Service extends Component {
  state = {
    service: {}
  }

  componentDidMount() {

    let id = this.props.match.params.id

    axios.get( '/service/' + id )
    .then( resp => {
      this.setState({ service: resp.data })
    })
    .catch( err => console.log(err.response))
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
      </div>
    )
  }
}

export default Service