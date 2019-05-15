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
    window.scrollTo(0, 0)
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

  handleClick = () => {
    this.props.history.push('/all-services');
  }

  render() {

    let service = { ...this.state.service };    
    let props = { ...this.props };    
    let imageUrl = service.image;

    let paragraphs = null;

    if( service.description ) {
      service.description = service.description.split('\n');

      paragraphs = service.description.map( (description, index) => {
        return(
          <p className='service__container--description' key={index}>{description}</p>
        )
      })
    }    

    return (
      <div className='service'>
        <Header { ...props }/>
        { service.image? <div className='service__container'>
          <img src={imageUrl} className='service__container--img' alt='img-service'/>
          <p className='service__container--name'>{service.name}</p>
          <div className='service__container--paragraphs'>
            {paragraphs}
          </div>
          <button className='btn' onClick={this.handleClick.bind( this )}>Todos los servicios</button>
        </div> : null}
        { this.state.notFound? <NoData item='este servicio.'/> : null }        
      </div>
    )
  }
}

export default Service