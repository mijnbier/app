import React from "react";
import BeerListItem from "./BeerListItem";

function selectedCategory(beer, category) {
  return beer.style === category
}

function isOnStock(beer) {
  return beer.stock > 0
}

function toListItem(item, index) {
  return (
    <BeerListItem key={index} {...item}></BeerListItem>
  )
}

export default function BeerList(props) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {props.data.filter(isOnStock).map(toListItem)}
    </ul>
  );
}
