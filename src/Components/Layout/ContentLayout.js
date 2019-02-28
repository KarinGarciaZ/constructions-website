import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import Home from '../../Containers/Home';
import Constructions from '../../Containers/Constructions';
import Construction from '../../Containers/Construction';
import AboutUs from '../../Containers/AboutUs';

class ContentLayout extends Component {
  render() {
    return (
      <Switch>
        <Route path="/construction/:id" component={Construction}/>
        <Route path="/all-constructions" component={Constructions}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/" component={Home}/>
      </Switch>
    )
  }
}

export default ContentLayout;