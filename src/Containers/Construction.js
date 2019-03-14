import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import axios from '../axios-connection';
import ConstructionCard from '../Components/Cards/ConstructionCard';

class Construction extends Component {

  state = {
    construction: { },
    urlImagePortrait: '',
    relatedConstructions: []
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.loadConstruction( id )
    this.loadRelatedConstructions()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id
      this.loadConstruction( id );
    }
  }

  loadRelatedConstructions = () => {
    axios.get( '/construction/numberOfConstructions/3' )
    .then( data => {
      this.setState({ relatedConstructions: data.data })
    })
    .catch( err => console.log(err.response) )
  }

  loadConstruction( id ) {    
    axios.get('/construction/' + id)
    .then( construction => {
      let urlImagePortrait = 'http://localhost:3001/' + construction.data.images.filter( image => image.mainImage === 1 )[0].url;
      this.setState({ construction: construction.data, urlImagePortrait })
    })
    .catch( error => {      
      console.log('error: ', error);
    })
  }

  changeMainImage = ( id ) => {
    let construction = { ...this.state.construction }
    construction.images.forEach(image => {
      if (image.id === id)
        image.mainImage = 1
      else 
        image.mainImage = 0
    });

    this.setState({construction})
  }

  handleClick = () => {
    this.props.history.push('/all-constructions');
  }

  onClickCard = (id) => {
    this.props.history.push('/construction/'+id)
  }

  render() {
    let construction = { ...this.state.construction }
    
    let mainImage = ''
    let images = []
    if ( construction.images ){
      mainImage = 'http://localhost:3001/' + construction.images.filter( image => image.mainImage === 1 )[0].url;

      images = construction.images.map( image => {
        let classes = ['construction__content--images-img']
        if (image.mainImage) 
          classes.push('construction__content--images-active')

        return <img 
          className={classes.join(' ')}
          alt='Construction img' 
          src={'http://localhost:3001/' + image.url}
          onMouseEnter={this.changeMainImage.bind(this, image.id)}
          key={image.id}></img>
      }) 
    }

    let relatedConstructions = [ ...this.state.relatedConstructions ]

    let carouselItems = relatedConstructions.map( construction => {
      return <ConstructionCard construction={construction} key={construction.id} cardSize='construction-card-small' clicked={this.onClickCard}/>
    })
     

    return (
      <div className='construction'>
        <Header /> 
        { construction.images? <div className='construction__content'>
          <div className='construction__content--image'>
              <img  src={this.state.urlImagePortrait} alt='main-img'/>
          </div>
          <div className='construction__content--images'>
            <div className='construction__content--images-main'>
              <img  src={mainImage} alt='main-img'/>
            </div>
            {images}
          </div>
          <div className='construction__content--info'>
            <h3 className='construction__content--info-title'>{construction.title}</h3>
            <div className='construction__content--info-type'>
              <p>Type</p>
              {construction.type.name}
            </div>
            <div className='construction__content--info-type'>
              <p>Status</p>
              {construction.statusConstruction}
            </div>
            <div className='construction__content--info-location'>
              <p>Location</p>
              {construction.address}, {construction.city}, {construction.state}.
            </div>
            <div className='construction__content--info-description'>
              <p>Description</p>
              {construction.description}
            </div>
          </div>
          <div className='construction__content--border'></div>
          <div className='construction__content--constructions'>
            <h4>Some related constructions</h4>
            {carouselItems}
          </div>
          <div className='construction__content--border'></div>
          <div className='construction__content--button'>
            <button className='btn' onClick={this.handleClick.bind( this )}>back to constructions</button>
          </div>
        </div> : null}
      </div>
    )
  }
}

export default Construction;