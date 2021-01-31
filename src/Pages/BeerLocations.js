import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import storelocations from "../Data/StoreLocations"

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
      <h3>
        Locaties toevoegen{" "}
        <Button variant="contained" color="primary">
          Sla op
        </Button>
      </h3>
      <br></br>
      <FormControl className={classes.root} variant="outlined">
      {storelocations.map(location =>  
            (
          <TextField value={location}> {location} </TextField>)
          )}
      </FormControl>
    </div>
  );
}
