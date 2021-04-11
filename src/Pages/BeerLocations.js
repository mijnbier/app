import React from "react";
import LocationSelector from "../Components/LocationSelector";
import Fab from '@material-ui/core/Fab';
import Autorenew from '@material-ui/icons/Autorenew';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function BeerLocations() {
  const classes = useStyles();

  return (
    <div>
      <h3>
        Bier per Locatie
        
      </h3>
      <LocationSelector> </LocationSelector>
      <Fab className={classes.fab}>
        <Autorenew />
      </Fab>
    </div>
  );
}
