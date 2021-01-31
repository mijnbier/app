import React, { useEffect, useState } from "react";
import database from "../Services/database";
import TotalStock from "../Components/TotalStock";
import UniqueBeers from "../Components/UniqueBeers";
import MostStyle from "../Components/MostStyle";
import PopularBeer from "../Components/PopularBeer";

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
      <table>
        <tbody>
          <tr>
            <td>Totaal aantal bier op voorraad:</td><TotalStock data={data}></TotalStock>
          </tr>
          <tr><td>Aantal unieke bieren: </td><UniqueBeers data={data}></UniqueBeers></tr>
          <tr><td>Nummer 1 Stijl: </td><MostStyle data={data}></MostStyle></tr>
          <tr><td>Populairste bier: </td><PopularBeer data={data}></PopularBeer></tr>
        </tbody>
      </table>
    </div>
  );
}
