import React from "react";
import BeerListItem from "./BeerListItem";

function isOnStock(beer) {
  return beer.stock > 0;
}

function toListItem(item, index) {
  return <BeerListItem key={index} {...item}></BeerListItem>;
}

export default function BeerList(props) {
  if (props.category === undefined) {
    return (
      <ul style={{ listStyleType: "none" }}>
        {props.data
          .filter(isOnStock)
          .map(toListItem)}
      </ul>
    );
  }
  return (
    <ul style={{ listStyleType: "none" }}>
      {props.data
        .filter(isOnStock)
        .filter((beer) => beer.style === props.category)
        .map(toListItem)}
    </ul>
  );
}
