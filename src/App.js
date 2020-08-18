import React from 'react';
import logo from './pub.svg';
import './App.css';
import BeerList from './Components/BeerList';

const data = [{merk:"Hertog jan", brouwerij:"Arcen", price:2},{merk:"Amstel", brouwerij:"Heineken", price:1.50}]

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
