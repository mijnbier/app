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
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  //const history = useHistory();
  const { id } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  async function deleteBeer() {
    //await database.collection("beers").doc(id).delete();
    setOpen(false);
    setOpenSnackbar(true);
    //history.push("/");
  }

  return (
    <Fragment>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
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
