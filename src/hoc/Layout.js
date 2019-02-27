import React, { Component } from 'react'

import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import ContentLayout from '../Components/Layout/ContentLayout';
import Aux from './Auxiliar';

class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <ContentLayout />
        <Footer />
      </div>
    )
  }
}

export default Layout;