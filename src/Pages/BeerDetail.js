import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data";

export default function BeerDetail() {
  const { id } = useParams();
  const beer = data.find((item) => item.brand === id);

  return (
    <div>
      <h3>{beer.brand}</h3>
      <div>Voorraad: {beer.stock}</div>
    </div>
  );
}
