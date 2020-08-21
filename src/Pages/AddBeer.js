import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';


export default function AddBeer() {

    return (
        <div>
            <h3>Pagina Bier toevoegen</h3>
            <h4>Naam:</h4>
            <h4>Bierstijl:</h4>

            <FormControl variant="outlined" >
                <InputLabel id="selectbierstijl">Bierstijl</InputLabel>
                <Select>
                    <MenuItem value={'Dubbel'}>Dubbel</MenuItem>
                    <MenuItem value={'Tripel'}>Tripel</MenuItem>
                    <MenuItem value={'IPA'}>IPA</MenuItem>
                </Select>
            </FormControl>
        </div>

    );
} 