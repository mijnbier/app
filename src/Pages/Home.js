import React, { useEffect, useState } from "react";
import logo from "../pub.svg";
import { Link } from "react-router-dom";
import "./Home.css";
import BeerList from "../Components/BeerList";
import database from "../Services/database";
import { Button } from "@material-ui/core";

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
    <>
      <img src={logo} className="logo" alt="logo" />
      <h1>Mijn Bier App</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/add-beer"
      >
        Nieuw Bier toevoegen
      </Button>
      <br></br>
      <Button
      variant="contained"
      color="primary"
      >
        Filter Dubbel
      </Button>
      <BeerList data={data}></BeerList>
    </>
  );
}
