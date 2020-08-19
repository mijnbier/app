import { useParams } from "react-router-dom";
import { data } from "../Data";
import React, { useState } from 'react';

export default function BeerDetail() {
  const { id } = useParams();
  const beer = data.find((item) => item.brand === id);
  const [stock, setStock] = useState(beer.stock);

  return (
    <div>
      <h3>{beer.brand}</h3>
      <div>Label: {beer.labels.join(' - ')} </div>
      <div>Voorraad: {stock}</div>
      <button disabled={stock===0}  onClick={() => setStock(stock - 1)}> Drink </button>
      <button onClick={() => setStock(stock + 1)}> Toevoegen</button>
    </div>
  );
}
