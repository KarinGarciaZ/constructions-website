import React, { Component } from 'react';
import axios from 'axios';

import Footer from '../Components/Layout/Footer';
import ContentLayout from '../Components/Layout/ContentLayout';

class Layout extends Component {

  componentDidMount() {        
    axios.get('http://127.0.0.1:3001/auth/website-token')
    .then( resp => {
      localStorage.setItem('websiteToken', resp.data.token);
    })
    .catch( error => {
      console.log(error.response)
    })
  }

  render() {
    return (
      <div className='container'>
        <ContentLayout />
        <Footer />
      </div>
    )
  }
}

export default Layout;