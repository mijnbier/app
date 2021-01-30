import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import BeerList from "../Components/BeerList";
import CategorySelector from "../Components/CategorySelector";
import database from "../Services/database";
import { Button } from "@material-ui/core";


export default function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();

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
      {/* <img src={logo} className="logo" alt="logo" /> */}
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
      <CategorySelector setCategory={setCategory}></CategorySelector>
      <BeerList data={data} category={category}></BeerList>
    </>
  );
}
