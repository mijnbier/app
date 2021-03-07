import React from "react";
//import Price from "./Price";
import { Link } from "react-router-dom";
import AlcoholDetail from "./AlcoholDetail";
import bottle from './beer_bottle.png';

export default function BeerListItem(props) {
  return (
    <li>
      <div>
        <tr>
          <td height="30px">
            <img src={bottle} alt="Beer Bottle" height="60" background="transparent"></img></td>
          <td valign="top" > 
            <tr><Link to={`/${props.id}`}>{props.brand}</Link></tr>
            <tr>Brouwerij: {props.brewery}</tr>
            <tr>Stijl: {props.style}, <AlcoholDetail alcohol={props.alcohol}/></tr></td>
          <td valign="top"> 
            Voorraad:{" "}{props.stock}x <br></br><br></br> </td>
        </tr>
      </div>
    </li>
  );
}
