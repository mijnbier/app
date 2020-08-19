import React from "react";
import logo from "../pub.svg";
import { data } from "../Data";
import "./Home.css";
import BeerList from "../Components/BeerList";

export default function Home() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <p>Mijn Bier App</p>
      <BeerList name="Duncan" data={data}></BeerList>
    </header>
  );
}
