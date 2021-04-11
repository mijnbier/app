/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import storelocations from "../Data/StoreLocations";

export default (props) => {
  const value = storelocations.indexOf(props.category) + 1;
  
  const handleChange = (event, newValue) => {
    props.setCategory(storelocations[newValue - 1]);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="on"
    >
      <Tab label="Alle" />
      {storelocations.map((category) => (
        <Tab key={category} label={category} />
      ))}
    </Tabs>
  );
};
