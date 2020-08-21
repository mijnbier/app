import React from "react";
import BeerListItem from "./BeerListItem";

export default function BeerList(props) {
  return (
    <ul>
      {props.data.map((item, index) => (
        <BeerListItem key={index} {...item}></BeerListItem>
      ))}
    </ul>
  );
}
