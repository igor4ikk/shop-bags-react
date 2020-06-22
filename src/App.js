import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Productlist from './Components/Productlist';
import Default from './Components/Default';
import Card from './Components/Card';
import Details from './Components/Details';
import Modal from './Components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {Productlist} />
        <Route path = '/card' component = {Card} />
        <Route path = '/details' component = {Details} />
        <Route component = {Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
