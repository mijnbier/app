import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";

export default function AddBeer() {
    return (
        <div>
            <h3>Pagina Bier toevoegen</h3>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
                <TextField
                    id="beername"
                    label="Bier"
                    variant="outlined"
                />
                <TextField
                    id="brewery"
                    label="Brouwerij"
                    variant="outlined"
                />
                <FormControl variant="outlined" >
                    <InputLabel id="selectbeerstyle">Bierstijl</InputLabel>
                    <Select
                        labelId="selectbeerstyle"
                        id="beerstyle">
                        <MenuItem value={'bock'}>Bock</MenuItem>
                        <MenuItem value={'blond'}>Blond</MenuItem>
                        <MenuItem value={'dubbel'}>Dubbel</MenuItem>
                        <MenuItem value={'ipa'}>IPA</MenuItem>
                        <MenuItem value={'porter'}>Porter</MenuItem>
                        <MenuItem value={'stout'}>Stout</MenuItem>
                        <MenuItem value={'tripel'}>Tripel</MenuItem>
                        <MenuItem value={'weizen'}>Weizen</MenuItem>
                        <MenuItem value={'witbier'}>Witbier</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="alcohol"
                    label="Alcohol percentage"
                    type="number"
                    variant="outlined"
                />
                <TextField
                    id="outlined-number"
                    label="Aantal stuks"
                    type="number"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="primary"
                > Toevoegen</Button>
            </FormControl>
        </div >
    );
} 