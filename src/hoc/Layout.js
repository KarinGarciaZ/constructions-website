import React, { Component } from 'react';
import axios from '../axios-connection';

import Footer from '../Components/Layout/Footer';
import ContentLayout from '../Components/Layout/ContentLayout';

class Layout extends Component {

  state = {
    gotToken: false
  }

  componentDidMount() {        
    axios.get('auth/website-token')
    .then( resp => {
      localStorage.setItem('websiteToken', resp.data.token);
      this.setState({gotToken: true})
    })
    .catch( error => {
      console.log(error.response)
    })
  }

  render() {
    return (
      <div className='container'>
        {this.state.gotToken? <ContentLayout /> : null}
        <Footer />
      </div>
    )
  }
}

export default Layout;