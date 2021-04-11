/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import database from "../Services/database";
import useSnackBars from "../SnackBarConsumer";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const { id } = useParams();
  const { addAlert } = useSnackBars();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function deleteBeer() {
    await database.collection("beers").doc(id).delete();
    setOpen(false);
    addAlert("Bier succesvol verwijderd");
    history.push("/");
  }

  return (
    <Fragment>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        Delete
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Delete Beer?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this beer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteBeer} color="primary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
