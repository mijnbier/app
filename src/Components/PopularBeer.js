import React from "react";

function isOnStock(beer) {
  return beer.stock > 0;
}

function findMax() {
}

export default function PopularBeer(props) {
  return (
    <td>
      
      n.n.b.
      {props.data.filter(isOnStock)}
    </td>
  );
}
