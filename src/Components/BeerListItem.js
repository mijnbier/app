import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";

export default function BeerListItem(props) {
  return (
    <li>
      Naam: <Link to={`/${props.brand}`}>{props.brand}</Link><br></br> {props.alc}% alc.
      ({props.brewery}) <Price value={props.price} /> Voorraad: {props.stock}x
    </li>
  );
}
