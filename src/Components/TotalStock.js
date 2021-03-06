import React from "react";

function isOnStock(beer) {
  return beer.stock > 0;
}

export default function TotalStock(props) {
  return (
    <td>
      {props.data
        .filter(isOnStock)
        .reduce(function (prev, current) {
        return prev + +current.stock;
      }, 0)}
    </td>
  );
}
