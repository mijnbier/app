import React from "react";

function isOnStock(beer) {
  return beer.stock > 0;
}

export default function TotalStock(props) {
  return (
    <td>
      {(props.data.map(isOnStock)).length}
    </td>
  );
}
