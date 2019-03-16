import React, { Component } from 'react';

import ConstructionCard from '../Cards/ConstructionCard';
import axios from '../../axios-connection';
import Aux from '../../hoc/Auxiliar';

class CarruselConstructions extends Component {

  state = {
    constructions: []
  }

  componentDidMount() {
    axios.get( '/construction/numberOfConstructions/6' )
    .then( data => {
      this.setState({ constructions: data.data })
    })
    .catch( err => console.log(err.response) )
  }

  onClickCard = (id) => {
    this.props.history.push('/construction/'+id)
  }

  render() {

    let constructions = [ ...this.state.constructions ]

    let carouselItems = constructions.map( construction => {
      return <ConstructionCard construction={construction} key={construction.id} clicked={this.onClickCard}/>
    })

    return (
      <Aux>
        { constructions.length? <div className='carousel'>
          <h2 className='carousel__title u-title-2 u-margin-bottom-8'>Some of our works!</h2>
          <div className='carousel-constructions-container'>
            {carouselItems}
          </div>
        </div> : null}
      </Aux>
      
    )
  }
}

export default CarruselConstructions;