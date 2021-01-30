import React from "react";
//import Price from "./Price";
import { Link } from "react-router-dom";
import AlcoholDetail from "./AlcoholDetail";
import bottle from './beer-bottle.png';

export default function BeerListItem(props) {
  return (
    <li>
      <div>
        <tr>
          <td height="30px">
            <img src={bottle} alt="Beer Bottle" height="40" background="transparent"></img></td>
          <td valign="top" > 
            <Link to={`/${props.id}`}>{props.brand}</Link><br></br>Brouwerij: {props.brewery}<br></br>
            {props.style}, 
            <AlcoholDetail alcohol={props.alcohol}/> </td>
          <td valign="top"> 
            Voorraad:{" "}{props.stock}x <br></br><br></br> </td>
        </tr>
      </div>
    </li>
  );
}
