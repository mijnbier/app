import { useParams } from "react-router-dom";
import { data } from "../Data";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

export default function BeerDetail() {
  const { id } = useParams();
  const beer = data.find((item) => item.brand === id);
  const [stock, setStock] = useState(beer.stock);

  return (
    <div>
      <h3>{beer.brand}</h3>
      <div>Label: {beer.labels.join(' - ')} </div>
      <div>Alc: {beer.alc}%</div>
      <div>Drink Temperatuur: {beer.drinktempc} &#8451;</div>
      <div>Voorraad: {stock}</div>
      <Button variant="contained" color="primary" disabled={stock === 0} onClick={() => setStock(stock - 1)}> Drink </Button>
      <Button variant="contained" color="primary" onClick={() => setStock(stock + 1)}> Toevoegen</Button>
    </div>
  );
}
