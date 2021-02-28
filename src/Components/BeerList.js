import React from "react";
import BeerListItem from "./BeerListItem";
import SwipeableViews from "react-swipeable-views";
import beercategories from "../Data/BeerCategories";

function isOnStock(beer) {
  return beer.stock > 0;
}

function toListItem(item, index) {
  return <BeerListItem key={index} {...item}></BeerListItem>;
}

export default function BeerList(props) {
  let index = 0;
  if (props.category !== undefined) {
    index = beercategories.indexOf(props.category) + 1;
  }

  function handleChangeIndex(index) {
    if (index === 0) {
      props.setCategory(undefined);
    } else {
      props.setCategory(beercategories[index - 1]);
    }
  }

  return (
    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      
        <ul style={{ listStyleType: "none" }}>
          {props.data.filter(isOnStock).map(toListItem)}
        </ul>
       
        {beercategories.map((category) => (
        <ul style={{ listStyleType: "none" }}>
        {props.data
          .filter(isOnStock)
          .filter((beer) => beer.style === category)
          .map(toListItem)}
      </ul>
      ))}

      
    </SwipeableViews>
  );
}
