import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Login from './components/Login';
import Mapa from  './components/Mapa';
import Ubicacion from  './components/Ubicacion';
class App extends Component {
  render(){
   return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/products" component={ProductList}/>
        <Route exact path="/" component={Login}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/mapa" component={Mapa}/>
        <Route path="/ubicacion" component={Ubicacion}/>
        <Route component={Default}/>
      </Switch>
      <Modal />
    </React.Fragment>
   );
  }
}

export default App;
