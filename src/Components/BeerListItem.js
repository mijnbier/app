import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
import bottle from './beer-bottle.png';

export default function BeerListItem(props) {
  return (
    <li>
      <div>
        <img src={bottle} alt="Beer Bottle" height="40" background="transparent"></img>
        <Link to={`/${props.id}`} style={{ color: '#FFF' }}>{props.brand}</Link>, Brouwerij: {props.brewery}<br></br>
        {props.style}, {props.alcohol}% alc.  <Price value={props.price} /> Voorraad:{" "}
        {props.stock}x
      </div>
    </li>
  );
}
