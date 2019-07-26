import React, { Component } from 'react'
import NavBar from './NavBar';
import { Button } from 'reactstrap';
import Cover from './Cover';
import Sponsor from './Sponsor';
import Content from './Content';
import Schedule from './Schedule';
import Footer from './Footer'


export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <div>
          <Cover />
          <Sponsor />
          <Content />
          <Schedule />
          <Footer />
        </div>
      </div>
    )
  }
}
