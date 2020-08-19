import { useParams } from "react-router-dom";
import { data } from "../Data";
import React, { useState } from 'react';

export default function BeerDetail() {
  const { id } = useParams();
  const beer = data.find((item) => item.brand === id);
  const stock = beer.stock
  const [count, setCount] = useState(stock);


  return (
    <div>
      <h3>{beer.brand}</h3>
      <div>Label: {beer.labels.join(' - ')} </div>
      <div>Voorraad: {count}</div>
      <button onClick={() => setCount(count - 1)}> Drink </button>
      <button onClick={() => setCount(count + 1)}> Toevoegen</button>
    </div>
  );
}
