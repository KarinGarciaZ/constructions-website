import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import Sidebar from '../Components/Layout/Sidebar';
import axios from '../axios-connection';
import ConstructionCard from '../Components/Cards/ConstructionCard';

class Constructions extends Component {

  state = {
    constructions: [],
    originalConstructions: [],
    sidebarElements: {
      statusConstruction: {
        elementType: 'select',
        value: '',
        options: [
          {name:'', id:''},
          {name:'Finished', id:'Finished'},
          {name:'In Progress', id:'In Progress'}
        ]
      },
      type: {
        elementType: 'select',
        value: 0,
        options: []
      },
      title: {
        elementType: 'input',
        value: '',
        type: 'text'   
      },
      city: {
        elementType: 'input',
        value: '',
        type: 'text'         
      },
      state: {
        elementType: 'input',
        value: '',
        type: 'text'    
      }
    }
  }

  componentDidMount() {
    axios.get('/construction')
    .then( data => {
      axios.get('/type')
      .then( res => {
        let elements = { ...this.state.sidebarElements };
        elements.type.options = res.data;
        elements.type.options.unshift({ name: '', id: 0 })
        this.setState({ constructions: data.data, originalConstructions: data.data, sidebarElements: elements })
      })
    })
    .catch( err => {
      console.log('err: ', err);
    })    
  }

  onChangeValue = ( event, key ) => {
    let elements = { ...this.state.sidebarElements }    
    let value = event.target.value;    
    let constructions = [ ...this.state.originalConstructions ]

    if ( this.state.sidebarElements.title.value !== '' && key !== 'title' ) {
      constructions = constructions.filter( construction => {
        if ( construction.title.toLowerCase().includes(this.state.sidebarElements.title.value.toLowerCase()) ) 
          return true;
        return false
      })
    }

    if ( this.state.sidebarElements.city.value !== '' && key !== 'city' ) {
      constructions = constructions.filter( construction => {
        if ( construction.city.toLowerCase().includes(this.state.sidebarElements.city.value.toLowerCase()) ) 
          return true;
        return false
      })
    }

    if ( this.state.sidebarElements.state.value !== '' && key !== 'state' ) {
      constructions = constructions.filter( construction => {
        if ( construction.state.toLowerCase().includes(this.state.sidebarElements.state.value.toLowerCase()) ) 
          return true;
        return false
      })
    }

    if ( this.state.sidebarElements.statusConstruction.value !== '' && key !== 'statusConstruction' ) {
      constructions = constructions.filter( construction => {
        if ( construction.statusConstruction.toLowerCase().includes(this.state.sidebarElements.statusConstruction.value.toLowerCase()) ) 
          return true;
        return false
      })
    }

    if ( key === 'type' ) value = +value
    if ((this.state.sidebarElements.type.value !== 0 && key !== 'type') || (key === 'type' && +value !== 0)) {      
      let typeValue = ( key === 'type' )? value : this.state.sidebarElements.type.value
      constructions = constructions.filter( construction => {
        if ( construction.typeId === typeValue ) 
          return true;
        return false
      })
    }

    if ( key !== 'type' )
      constructions = constructions.filter( construction => {
        if ( construction[key].toLowerCase().includes(value.toLowerCase()) || !value )
          return true
        return false
      })
    elements[key].value = value;
    this.setState({ sidebarElements: elements, constructions })    
  }
  
  onClickCard = (id) => {
    this.props.history.push('/construction/'+id)
  }

  render() {
    
    let props = { ...this.props };
    let sidebarElements = { ...this.state.sidebarElements }
    let constructions = [ ...this.state.constructions ]

    let constructionCards = constructions.map( construction => {
      return <ConstructionCard construction={construction} cardSize='construction-card-small' key={construction.id} clicked={this.onClickCard}/>
    })

    return (
      <div className='constructions'>
        <Header { ...props }/>
        <Sidebar elements={sidebarElements} changed={this.onChangeValue}/>
        <div className='constructions__container'>
          {constructionCards}
        </div>
      </div>
    )
  }
}

export default Constructions;