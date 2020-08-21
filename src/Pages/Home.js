import React, { useEffect, useState } from "react";
import logo from "../pub.svg";
import "./Home.css";
import BeerList from "../Components/BeerList";
import database from "../Services/database";

export default function Home() {
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
    <header>
      <img src={logo} className="logo" alt="logo" />
      <p>Mijn Bier App</p>
      <BeerList name="Duncan" data={data}></BeerList>
    </header>
  );
}
