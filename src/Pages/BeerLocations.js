import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

export default function BeerDetail() {
  const classes = useStyles();

  return (
    <div>
      <h3>Locaties toevoegen     <Button variant="contained" color="primary">
        Sla op
      </Button></h3>
      <br></br>
      
      <FormControl className={classes.root} variant="outlined">
        <TextField
          value="Koelkast"
          id="outlined-number"
          label="Locatie 1"
          autoFocus={true}
        />
        <TextField value="Bar" id="outlined-number" label="Locatie 2" />
        <TextField value="Berging A" id="outlined-number" label="Locatie 3" />
        <TextField value="Berging B" id="outlined-number" label="Locatie 4" />
        <TextField value="BeerWulf L" id="outlined-number" label="Locatie 5" />
        <TextField value="BeerWulf R" id="outlined-number" label="Locatie 6" />
        <TextField value="Flessenrek" id="outlined-number" label="Locatie 7" />
      </FormControl>
    </div>
  );
}
