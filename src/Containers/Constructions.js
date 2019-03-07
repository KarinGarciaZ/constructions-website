import React, { Component } from 'react';

import Header from '../Components/Layout/Header';

class Constructions extends Component {
  render() {
    
    let props = { ...this.props };

    return (
      <div className='constructions'>
        <Header { ...props }/>
        constructions
      </div>
    )
  }
}

export default Constructions;