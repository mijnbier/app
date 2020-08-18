import React from 'react';
import logo from './pub.svg';
import './App.css';
import BeerList from './Components/BeerList';

const data = [
  {
    brand:"Hertog Jan Weizener", 
    brewery:"Hertog Jan",
    type: "Weizen", 
    price:2,
    alc:6.5,
    stock:0,
    volume:30
  },
  {
    brand:"La Trappe Tripel", 
    brewery:"Koningshoeven", 
    type: "Tripel", //Kan een bier meerdere types hebben?
    price:1.7,
    alc:8,
    stock:1,
    volume:30
  },
  {
    brand:"Tripel Karmeliet",
    brewery:"Bosteels",
    type: "Tripel", 
    price:1.80,
    alc:8.4,
    stock:2,
    volume:30
  },
  {
    brand:"Hertog Jan Grand Prestige",
    brewery:"Hertog Jan",
    type: "Gerstewijn", 
    price:5.00,
    alc:10,
    stock:5,
    volume:75
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mijn Bier App
          
        </p>
        
        <BeerList name="Duncan" data={data}></BeerList>
      </header>
      
    </div>
  );
}

export default App;
