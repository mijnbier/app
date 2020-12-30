import React from "react";
import "./AddBeer.css";
import { useHistory } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import db from "../Services/database";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      Width: 200,
    },
  },
}));

export default function AddBeer() {
    const classes = useStyles();
    const history = useHistory();

    const [name, setName] = React.useState("");
    const [brewery, setBrewery] = React.useState("");
    const [stock, setStock] = React.useState(0);
    const [style, setStyle] = React.useState("");
    const [alcohol, setAlcohol] = React.useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleStockChange = (e) => {
        setStock(e.target.value);
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
    const onUpdate = () => {
        db.collection('beers').doc().set({ brand: name, price: 0, stock, brewery, alcohol, style })
        history.push("/");
    }

  return (
    <header>
      <h3>Bier toevoegen</h3>
      <FormControl className={classes.root} variant="outlined">
        <TextField
          onChange={handleNameChange}
          value={name}
          id="brand"
          label="Bier"
        />
        <TextField
          onChange={handleBreweryChange}
          value={brewery}
          id="brewery"
          label="Brouwerij"
        />
        <TextField
          onChange={handleStyleChange}
          value={style}
          id="selectbeerstyle"
          select
          label="Bierstijl"
        >
          <MenuItem value={"barleywine"}>Gerstewijn</MenuItem>
          <MenuItem value={"bock"}>Bock</MenuItem>
          <MenuItem value={"blond"}>Blond</MenuItem>
          <MenuItem value={"dubbel"}>Dubbel</MenuItem>
          <MenuItem value={"ipa"}>IPA</MenuItem>
          <MenuItem value={"porter"}>Porter</MenuItem>
          <MenuItem value={"stout"}>Stout</MenuItem>
          <MenuItem value={"tripel"}>Tripel</MenuItem>
          <MenuItem value={"weizen"}>Weizen</MenuItem>
          <MenuItem value={"witbier"}>Witbier</MenuItem>
          <MenuItem value={"other"}>Overig</MenuItem>
        </TextField>
        <TextField
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
    </header>
  );
}
