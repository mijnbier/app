import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import logo from "../pub.svg";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { logIn, logOut } from "../Services/auth";
import { UserContext } from "../Contexts/UserProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  toolbar: {
    maxHeight: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const user = useContext(UserContext);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} style={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logo} className="logo" alt="logo" />
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorEl)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">Bieren</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/beer-locations">Locaties</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/beer-statistics">Statistieken</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Recent</MenuItem>
            <MenuItem onClick={handleClose}>Wensenlijst</MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/settings">Instellingen</Link>
            </MenuItem>

            {user ? (
              <MenuItem onClick={logOut}>
                {user.displayName} - Log out <ExitToApp />
              </MenuItem>
            ) : (
              <MenuItem onClick={logIn}>Log in</MenuItem>
            )}
          </Menu>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" variant="body" style={{ color: "#FFF" }}>
              mijn Bier app
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
