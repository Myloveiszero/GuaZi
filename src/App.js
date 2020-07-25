import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SellCars from './pages/sellingCars/SellCars';
import BuyCars from './pages/buycars/wrapper/Wrapper';
import Message from './pages/message/Message';
import Mine from './pages/mine/Mine';
import Detail from './pages/detailInfo/DetailInfor';

function App() {
  return (
    <Router>
      {/* <Route path='/' exact component={Home}/> */}
      {/* <Route path='sell/'  component={SellCars}/> */}
      <Route path='/buy' exact component={BuyCars}/>
      <Route path='/buy/detail'  component={Detail}/>
      {/* <Route path='/message/'  component={Message}/> */}
      {/* <Route path='/mine/'  component={Mine}/> */}
    </Router>
  );
}

export default App;
