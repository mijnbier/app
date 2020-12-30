import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import database from "../Services/database";

export default function BeerDetail() {
  const [beer, setBeer] = useState();
  const [stock, setStock] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    database
      .collection("beers")
      .doc(id)
      .onSnapshot((snapshot) => {
        setBeer(snapshot.data());
        setStock(snapshot.data().stock);
      });
  }, [id]);

  async function updateStock(newValue) {
    await database.collection("beers").doc(id).update({ stock: newValue });
  }

  return !beer ? (
    <div>Laden...</div>
  ) : (
      <div>
        <h3>{beer.brand}</h3>
        <div>Label: {beer.labels?.join(" - ")} </div>
        <div>Alc: {beer.alcohol}%</div>
        <div>Voorraad: {stock}</div>
        <Button
          variant="contained"
          color="primary"
          disabled={stock === 0}
          onClick={async () => await updateStock(stock - 1)}
        >
          Drink
      </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => await updateStock(stock + 1)}
        >
          Toevoegen
      </Button>
      </div>
    );
}
