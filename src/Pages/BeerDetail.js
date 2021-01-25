import { useParams, useHistory} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../App.css";
import database from "../Services/database";
import AlertDialog from "../Components/AlertDialog";

export default function BeerDetail() {
  const [beer, setBeer] = useState();
  const [stock, setStock] = useState(0);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    database
      .collection("beers")
      .doc(id)
      .onSnapshot((snapshot) => {
        setBeer(snapshot.data());
        setStock(snapshot.data()?.stock);
      });
  }, [id]);

  async function deleteBeer() {
    await database.collection("beers").doc(id).delete()
    history.push("/");
  }

  async function updateStock(newValue) {
    await database.collection("beers").doc(id).update({ stock: newValue });
  }

  return !beer ? (
    <div>Laden...</div>
  ) : (
        <div>
      <h2>{beer.brand}</h2>
      <div>Stijl: {beer.style} </div>
      <div>Alcohol: {beer.alcohol}%</div>
      <div>Voorraad: {stock}</div>
      <div>Prijs: &euro; {(beer.totalprice/beer.buyed).toFixed(2)}  ({beer.buyed} stuks, totaal: &euro; {beer.totalprice.toFixed(2)})  </div>

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
      </Button><br></br>
      <Button
        variant="contained"
        color="primary"
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={deleteBeer}
      >
        Delete
      </Button><br></br>
      
      <AlertDialog></AlertDialog>
      </div>
    );
}
