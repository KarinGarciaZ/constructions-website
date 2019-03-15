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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id
      this.loadConstruction( id );
    }
  }

  loadConstruction = ( id ) => {    
    axios.get('/construction/' + id)
    .then( construction => {
      let urlImagePortrait = 'http://localhost:3001/' + construction.data.images.filter( image => image.mainImage === 1 )[0].url;

      if ( construction.data.images.length > 1 ) {
        if ( !construction.data.images[0].mainImage ) {
          construction.data.images[0].mainImage = 1
          construction.data.images[1].mainImage = 0
        }
        else {
          construction.data.images[1].mainImage = 1
          construction.data.images[0].mainImage = 0
        }
        construction.data.images.forEach( (image, index) => {
          if ( index > 1 )
            image.mainImage = 0;
        })
      }

      this.loadRelatedConstructions( construction.data.typeId, construction.data.id )

      this.setState({ construction: construction.data, urlImagePortrait })
    })
    .catch( error => {      
      console.log('error: ', error);
    })
  }

  loadRelatedConstructions = ( typeId, idConstruction ) => {
    axios.get( '/construction/getRelatedConstructions/4&' + typeId)
    .then( data => {
      let constructions = data.data;

      let relatedConstructions = constructions.filter( construction => construction.id !== idConstruction )
      if ( relatedConstructions.length === 4 )
        relatedConstructions.pop();

      this.setState({ relatedConstructions })
    })
    .catch( err => console.log(err.response) )
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

  onOptionsIconClick = () => {
    this.setState( state => { 
      return { sidebarDefault: !state.sidebarDefault }
    })
  }

  render() {
    let construction = { ...this.state.construction }
    let props = { ...this.props }
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
        <Header { ...props } iconClicked={this.onOptionsIconClick}/> 
        { construction.images? <div className='construction__content'>
          <div className='construction__content--image'>
            <img  src={this.state.urlImagePortrait} alt='main-img'/>
            <div className='construction__content--image-title'>
              <p>{construction.title}</p>
            </div>
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
          { this.state.relatedConstructions.length? <div className='construction__content--constructions'>
            <h4>Some related constructions</h4>
            {carouselItems}
          </div> : null}
          { this.state.relatedConstructions.length? <div className='construction__content--border'></div> : null}
          <div className='construction__content--button'>
            <button className='btn' onClick={this.handleClick.bind( this )}>back to constructions</button>
          </div>
        </div> : null}
      </div>
    )
  }
}

export default Construction;