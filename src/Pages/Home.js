import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BeerList from "../Components/BeerList";
import CategorySelector from "../Components/CategorySelector";
import database from "../Services/database";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();
  const classes = useStyles();
  
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
      <br></br>
      <CategorySelector
        category={category}
        setCategory={setCategory}
      ></CategorySelector>
      <BeerList
        category={category}
        data={data}
        setCategory={setCategory}
      ></BeerList>
      <Fab component={Link}
        to="/add-beer" color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </>
  );
}
