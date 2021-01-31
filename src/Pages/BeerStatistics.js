import React, { useEffect, useState } from "react";
import database from "../Services/database";
import TotalStock from "../Components/TotalStock";



export default function BeerStatistics() {
  const [data, setData] = useState([]);

    useEffect(() => {
        database.collection("beers").onSnapshot((snapshot) => {
            const beers = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setData(beers);
          });
        }, []);
    

  return (
    <div>
      <h2> Bier Statistieken</h2>
      <p> Totaal  aantal bier op voorraad: <TotalStock data={data}></TotalStock></p>
      <p> Aantal verschillende bieren: </p>
      <p> Nummer 1 Stijl: </p>
    </div>
  );
}
