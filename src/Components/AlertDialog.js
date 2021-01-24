import React from "react";
import { Component, Fragment } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component {
    state = {
        open: false,
        delete: false
    }

    handleToggle = () =>{
        this.setState({
            open: !this.state.open
        })
    }
    handleClose = () =>{
        this.setState({
            open: !this.state.open
        })

    }
    handleDelete = () => {
        console.log("Beer not deleted")
    }

    render() {
        const { open} = this.state
        
        return <Fragment>
            <Button 
            color="primary"
            variant="contained"
            onClick={this.handleToggle}>
                Dialog 
                </Button>

            <Dialog 
                open={open} 
                onClose={this.handleToggle} 
                >

        <DialogTitle id="form-dialog-title">Delete Beer?</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Are you sure you want to delete this beer?
            </DialogContentText>         
        </DialogContent>
        <DialogActions>
          <Button  onClick={this.handleToggle} color="primary">
            Cancel
          </Button>
          <Button  onClick ={this.handleDelete} color="primary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
</Fragment>


    }
} 
