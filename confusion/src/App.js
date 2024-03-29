//import logo from './logo.svg';
import React, { Component } from 'react'; 
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '/Users/eduardoblanco/Documents/coursera/reactCourse/confusion/src/components/MenuComponent.js';
import {DISHES} from '/Users/eduardoblanco/Documents/coursera/reactCourse/confusion/src/shared/dishes.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES
    };
  }
  
  render() {
    return (
    
    <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  };
};

export default App;
