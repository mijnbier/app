import React from "react";

function isOnStock(beer) {
  return beer.stock > 0;
}

export default function TotalStock(props) {
  return (
    <td>
      Nog nader te bepalen{props.data.map(isOnStock)}
    </td>
  );
}
