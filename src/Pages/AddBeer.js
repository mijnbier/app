import React from "react";
import "./AddBeer.css";
import { useHistory, Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import db from "../Services/database";
import "firebase/firestore";
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from "../pub.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      Width: 200,
    },
    '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
  },
}));

export default function AddBeer() {
    const classes = useStyles();
    const history = useHistory();

    const [name, setName] = React.useState("");
    const [brewery, setBrewery] = React.useState("");
    const [stock, setStock] = React.useState(1);
    const [style, setStyle] = React.useState("");
    const [alcohol, setAlcohol] = React.useState(null);
    const [beerExists, setBeerExists] = React.useState(false);

    const handleNameChange = async (e) => {
        setName(e.target.value);
        const result = await db.collection('beers').where("brand", "==", e.target.value).get()
        
        if(result.size === 1) {
            setBeerExists(true)
            console.log(result.docs[0].id, " => ", result.docs[0].data());
        } else {
            setBeerExists(false)
            console.log("xxxxx")
        }
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
      <Link to="/">Home</Link>

      <h3>Bier toevoegen</h3>
      <FormControl className={classes.root} variant="outlined">
        <TextField
          onChange={handleNameChange}
          className={classes.root} 
          value={name}
          color={beerExists ? "secondary" : "primary"}
          id="brand"
          label="Bier"
          InputProps={{
            endAdornment: <InputAdornment position="edge"><img hidden={!beerExists} src={logo}/></InputAdornment>,
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
