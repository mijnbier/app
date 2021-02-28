/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import beercategories from "../Data/BeerCategories";

export default (props) => {
  const value = beercategories.indexOf(props.category) + 1;
  
  const handleChange = (event, newValue) => {
    props.setCategory(beercategories[newValue - 1]);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="on"
    >
      <Tab label="Alle" />
      {beercategories.map((category) => (
        <Tab key={category} label={category} />
      ))}
    </Tabs>
  );
};
