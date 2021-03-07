import React from "react";
import "./AddBeer.css";
import { useHistory } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import db from "../Services/database";
import "firebase/firestore";
import InputAdornment from "@material-ui/core/InputAdornment";
import logo from "../pub.svg";
import firebase from "firebase";
import storelocations from "../Data/StoreLocations"
import beercategories from "../Data/BeerCategories"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      Width: 200,
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
}));

export default function AddBeer() {
  const classes = useStyles();
  const history = useHistory();

  const [ean, setEan] = React.useState("");
  const [name, setName] = React.useState("");
  const [brewery, setBrewery] = React.useState("");
  const [stock, setStock] = React.useState(1);
  const [buyed, setBuyed] = React.useState(1);
  const [style, setStyle] = React.useState("");
  const [alcohol, setAlcohol] = React.useState(null);
  const [location, setLocation] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [totalprice, setTotalPrice] = React.useState("");
  const [beerExists, setBeerExists] = React.useState(false);

  const handleEanChange = async (e) => {
    setEan(e.target.value);
    const result = await db
      .collection("beers")
      .where("ean", "array-contains" , e.target.value)
      .get();
    setBeerExists(result.size > 0);
    if (result.size > 0){
      const id = result.docs[0].id;
      db.collection("beers").doc(id).onSnapshot((snapshot) => {
        setName(snapshot.data().brand);
      });
    }
  };
  const handleNameChange = async (e) => {
    setName(e.target.value);
    const result = await db
      .collection("beers")
      .where("brand", "==", e.target.value)
      .get();
    setBeerExists(result.size > 0 );
  };

  const handlePriceChange = (e) => {
    const priceBuyed = price*buyed
    setPrice(e.target.value);
    setTotalPrice(priceBuyed)
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
    setBuyed(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  
  const handleBreweryChange = (e) => {
    setBrewery(e.target.value);
  };
  const handleStyleChange = (e) => {
    setStyle(e.target.value);
  };
  const handleAlcoholChange = (e) => {
    setAlcohol(e.target.value);
  };
  const onUpdate = async () => {
    if (beerExists) {
      const result = await db
        .collection("beers")
        .where("brand", "==", name)
        .get();
      db.collection("beers")
        .doc(result.docs[0].id)
        .update({
          stock: firebase.firestore.FieldValue.increment(parseInt(stock)),
          buyed: firebase.firestore.FieldValue.increment(parseInt(stock)),
          totalprice: firebase.firestore.FieldValue.increment(parseFloat(totalprice)),
          price: firebase.firestore.FieldValue.arrayUnion((price)),
          ean: firebase.firestore.FieldValue.arrayUnion(ean),
          location: firebase.firestore.FieldValue.arrayUnion(location)
        });
    } else {
      db.collection("beers")
        .doc()
        .set({ ean: [ean],  brand: name, price: [price], stock, location: [location], brewery, alcohol, style, buyed, totalprice});
        
    }

    history.push("/");
  };

  return (
    <>
      
      <h3>Bier toevoegen</h3>
      <FormControl className={classes.root} variant="outlined">
      <TextField
          onChange={handleEanChange}
          value={ean}
          id="outlined-number"
          label="Barcode"
          autoFocus={true}
        />
        <TextField
          onChange={handleNameChange}
          className={classes.root}
          value={name}
          color={beerExists ? "secondary" : "primary"}
          id="brand"
          label="Bier"
          InputProps={{
            endAdornment: (
              <InputAdornment position="edge">
                <img hidden={!beerExists} src={logo} alt="beer-icon" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={handleBreweryChange}
          value={brewery}
          disabled={beerExists}
          id="brewery"
          label="Brouwerij"
        />
        <TextField
          onChange={handleStyleChange}
          value={style}
          disabled={beerExists}
          id="selectbeerstyle"
          select
          label="Bierstijl"
        >
          {beercategories.map(category =>  
            (
          <MenuItem value={category}> {category} </MenuItem>)
          )}
        </TextField>
        <TextField
          disabled={beerExists}
          onChange={handleAlcoholChange}
          value={alcohol}
          id="alcohol"
          label="Alcohol percentage"
          type="number"
          inputProps={{ min: "0", max: "100", step: "0.1" }}
        />
        <TextField
          onChange={handleStockChange}
          value={stock}
          id="outlined-number"
          label="Aantal stuks"
          type="number"
        />
        <TextField
          onChange={handleLocationChange}
          value={location}
          id="storelocation"
          select
          label="Locatie"
        >
        {storelocations.map(location =>  
            (
          <MenuItem value={location}> {location} </MenuItem>)
          )}
          </TextField>
        <TextField
          onChange={handlePriceChange}
          value={price}
          id="outlined-number"
          label="Prijs per stuk"
          type="number"
        />
        <Button
          onClick={onUpdate}
          variant="contained"
          color="primary"
          disabled={!name}
          
        >
          {" "}
          Toevoegen
        </Button>
      </FormControl>
    </>
  );
}
