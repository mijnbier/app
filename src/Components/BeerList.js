import React from "react";
import BeerListItem from "./BeerListItem";
import SwipeableViews from "react-swipeable-views";
import beercategories from "../Data/BeerCategories";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
};

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
      console.log("0")
      props.setCategory(undefined);
    } else {
      console.log(beercategories[index - 1])
      props.setCategory(beercategories[index - 1]);
    }
  }

  return (
    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <ul style={{ listStyleType: "none" }}>
          {props.data.filter(isOnStock).map(toListItem)}
        </ul>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <ul style={{ listStyleType: "none" }}>
          {props.data
            .filter(isOnStock)
            .filter((beer) => beer.style === beercategories[0])
            .map(toListItem)}
        </ul>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <ul style={{ listStyleType: "none" }}>
          {props.data
            .filter(isOnStock)
            .filter((beer) => beer.style === beercategories[1])
            .map(toListItem)}
        </ul>
      </div>
    </SwipeableViews>
  );
}
