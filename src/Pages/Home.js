import React from "react";
import logo from "../pub.svg";
import Button from '@material-ui/core/Button';
import { data } from "../Data";
import { Link } from 'react-router-dom';
import "./Home.css";
import BeerList from "../Components/BeerList";

export default function Home() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <p>Mijn Bier App</p>
      <Button variant="contained" color="primary" component={Link} to="/add-beer">Nieuw Bier toevoegen</Button >
      <BeerList name="Duncan" data={data}></BeerList>
    </header >
  );
}
