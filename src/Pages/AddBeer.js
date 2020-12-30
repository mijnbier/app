import React from "react";
import "./AddBeer.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import db from "../Services/database";
import 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            Width: 200,

        },
    },
}));



export default function AddBeer() {
    const classes = useStyles();

    const [name, setName] = React.useState();

    const handleOnChange = (e) => {
        setName(e.target.value);
    };

    const onUpdate = () => {
        db.collection('beers').doc().set({ brand: name })
    }


    return (
        <header>

            <h3>Bier toevoegen</h3>
            <FormControl className={classes.root} variant="outlined"  >
                <TextField onChange={handleOnChange} value={name}
                    id="brand"
                    label="Bier"
                />
                <TextField
                    id="brewery"
                    label="Brouwerij"
                />
                <TextField id="selectbeerstyle" select
                    variant="outlined"
                    label="Bierstijl">
                    <MenuItem value={'barleywine'}>Gerstewijn</MenuItem>
                    <MenuItem value={'bock'}>Bock</MenuItem>
                    <MenuItem value={'blond'}>Blond</MenuItem>
                    <MenuItem value={'dubbel'}>Dubbel</MenuItem>
                    <MenuItem value={'ipa'}>IPA</MenuItem>
                    <MenuItem value={'porter'}>Porter</MenuItem>
                    <MenuItem value={'stout'}>Stout</MenuItem>
                    <MenuItem value={'tripel'}>Tripel</MenuItem>
                    <MenuItem value={'weizen'}>Weizen</MenuItem>
                    <MenuItem value={'witbier'}>Witbier</MenuItem>
                    <MenuItem value={'other'}>Overig</MenuItem>

                </TextField>
                <TextField
                    id="alcohol"
                    label="Alcohol percentage"
                    type="number"
                    inputProps={{ min: "0", max: "100", step: "0.1" }}
                />
                <TextField
                    id="outlined-number"
                    label="Aantal stuks"
                    type="number"
                />
                <Button onClick={onUpdate}
                    variant="contained"
                    color="primary"
                > Toevoegen</Button>
            </FormControl>

        </header>
    );
} 