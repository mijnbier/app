import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
import bottle from './beer-bottle.png';

export default function BeerListItem(props) {
  return (
    <li>
      <div>
        <img src={bottle} alt="Beer Bottle" height="100" background="transparent"></img>
      </div>

      <div>
        Naam: <Link to={`/${props.id}`}>{props.brand}</Link>, {props.alcohol}%
      alc. ({props.brewery}) <Price value={props.price} /> Voorraad:{" "}
        {props.stock}x
      </div>
    </li>
  );
}
