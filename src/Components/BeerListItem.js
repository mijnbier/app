import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
import bottle from './beer-bottle.png';

export default function BeerListItem(props) {
  return (
    <li>
      <div>
        <img src={bottle} alt="Beer Bottle" height="100" background="transparent"></img>
        Naam: <Link to={`/${props.id}`}>{props.brand}</Link>
        <br></br>Brouwerij: {props.brewery}, {props.alcohol}% alc.  <Price value={props.price} /> Voorraad:{" "}
        {props.stock}x
      </div>
    </li>
  );
}
