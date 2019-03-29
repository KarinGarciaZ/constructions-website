import React, { Component } from 'react';

import Loading from '../Components/Loading';
import NoData from '../Components/NoData';
import Header from '../Components/Layout/Header';
import Sidebar from '../Components/Layout/Sidebar';
import axios from '../axios-connection';
import ConstructionCard from '../Components/Cards/ConstructionCard';

class Constructions extends Component {

  state = {
    sidebarDefault: true,
    loadedContent: 'loading',
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

        let loadedContent =  data.data.length? 'constructions' : 'none';
        
        this.setState({ constructions: data.data, originalConstructions: data.data, sidebarElements: elements, loadedContent })
      })
    })
    .catch( err => {
      console.log('err: ', err.response);
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
    let loadedContent =  constructions.length? 'constructions' : 'none';
    this.setState({ sidebarElements: elements, constructions, loadedContent })    
  }
  
  onOptionsIconClick = () => {
    this.setState( state => { 
      return { sidebarDefault: !state.sidebarDefault }
    })
  }

  onClickCard = (id) => {
    this.props.history.push('/construction/'+id)
  }

  render() {    
    let props = { ...this.props };
    let sidebarElements = { ...this.state.sidebarElements }
    let constructions = [ ...this.state.constructions ]

    let constructionCards = constructions.map( construction => {
      return <ConstructionCard construction={construction} cardSize='construction-card-small' key={construction.id} clicked={this.onClickCard.bind(this)}/>
    })

    let title = '';
    if( constructions.length ) 
      title = 'These are our projects, get facinated with them!'

    let content = this.state.loadedContent;
    let loadContent = null;
    switch (content) {
      case 'loading':
        loadContent = <Loading />
        break;
      case 'constructions':
        loadContent = <div className='constructions__container'>
          <p className='constructions__container--title'>{title}</p>
          {constructionCards}
        </div>
        break;
      case 'none':
        loadContent = <NoData item='Constructions with these characteristics.'/>
        break;
    
      default:
        loadContent = <Loading />
        break;
    }

    return (
      <div className='constructions'>
        <Header { ...props } optionsIcon={true} iconClicked={this.onOptionsIconClick}/>
        <Sidebar elements={sidebarElements} changed={this.onChangeValue} title='Filter constructions by:' sidebarDefault={this.state.sidebarDefault}/>
        {loadContent}
      </div>
    )
  }
}

export default Constructions;