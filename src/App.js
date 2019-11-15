import React,  { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import Header from './assets/components/Header.js'
import Landingpage from './assets/components/Landingpage.js';
import CartButton from './assets/components/CartButton.js';
import Products from './assets/components//Products.js';
import About from './assets/components/About.js';
import Login from './assets/components//Login.js';

import {list} from './assets/components/Data.js';


console.log(list)
export default  class App extends Component {
  constructor(){
    super()
    this.state = {
    list
    }
  }
  render(){
    return (

       <div className="App">
      <Router>
      <Header />
        <Route path="/about" component={About} />
        <Route path="/newArrivals" component={Landingpage} />
        <Route path="/products" component={Products} list={this.state.list}/>
        <Route path="/Login" component={Login} />
        </Router>
      </div>
    )
  }
}
