import React from "react";
import "./AddBeer.css";
import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
//import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import database from "../Services/database";
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
        const db = database.firestore()
        db.collection('beers').doc().set({ name })
    }


    return (
        <header>

            <h3>Bier toevoegen</h3>
            <FormControl className={classes.root} variant="outlined"  >
                <TextField Onchange={handleOnChange} value={name}
                    id="beername"
                    label="Bier"
                />
                <TextField
                    id="brewery"
                    label="Brouwerij"
                />
                <TextField id="selectbeerstyle" select
                    variant="outlined"
                    label="Bierstijl">
                    <MenuItem value={'bock'}>Bock</MenuItem>
                    <MenuItem value={'blond'}>Blond</MenuItem>
                    <MenuItem value={'dubbel'}>Dubbel</MenuItem>
                    <MenuItem value={'ipa'}>IPA</MenuItem>
                    <MenuItem value={'porter'}>Porter</MenuItem>
                    <MenuItem value={'stout'}>Stout</MenuItem>
                    <MenuItem value={'tripel'}>Tripel</MenuItem>
                    <MenuItem value={'weizen'}>Weizen</MenuItem>
                    <MenuItem value={'witbier'}>Witbier</MenuItem>
                </TextField>
                <TextField
                    id="alcohol"
                    label="Alcohol percentage"
                    type="number"
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