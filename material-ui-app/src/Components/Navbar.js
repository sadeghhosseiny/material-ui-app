import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InputBase from "@material-ui/core/InputBase";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import { ListItemIcon } from "@material-ui/core";
import {Link} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({

  superRoot: {
    width: "280px",
    transition: "0.4s ease-in-out",
  },
  FocusedSuperRoot: {
    width: "480px",
    transition: "0.4s ease-in-out",
  },
  root: {
    position: "relative",
    width: "100%",
    marginLeft: "35px",
  },
  searchInput: {
    width: "calc(100% - 85px)",
    backgroundColor: "#ddd",
    outline: "none",
    border: "none",
    padding: "7px 15px",
    paddingLeft: "50px",
    fontSize: "0.97rem",
    color: "#333",
    borderRadius: "4px",
    margin: "8px",
    transition: "0.4s ease-in-out",
  },

  btnContainer: {
    position: "absolute",
    top: "12px",
    left: "16px",
  },

  link:{
    textDecoration:"none",
    color:"white",
    display:"flex",
    marginLeft:"auto"
    
  },

  icon: {
    padding: "7px",
    transition: "0.4s ease-in-out",

    color: "red",
    transform: "rotate(-360deg)",
  },

  icon2: {
    padding: "7px",
    transition: "0.4s ease-in-out",
  },

  menuButton: {
    marginRight: "5px",
  },

  loginButton: {
    color: "white",
    padding: "8px 20px",
    backgroundSize: "200%",
    textDecoration:"none",
    display:"inline-block",
    // transition:"all 1s linear",
    transition: "0.5s ease-out",

    "&:hover": {
      // backgroundImage:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      backgroundPosition: "right",
      transform: "scale(1.1)",
    },
  },

  // btnMainContainer:{
  //   // width:"100%",
  //   display:"flex",
  //   justifyContent:"flex-end"
  // },

  tr: {
    backgroundImage: "linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)",
  },

  list: {
    // background:"red",
    width: "250px",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    transition: "0.4s ease-in-out",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

function Navbar() {
  const classes = useStyle();
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState({ left: false });

  const ItemList = [
    {
      text: "Home",
      icon: <HomeIcon color="primary" />
    },
    {
      text: "Page1",
    },
    {
      text: "Page2",
    },
    {
      text: "Page3",
    },
  ];

  const handleDrawer = (side, open) => (event) => {
    setOpen({ ...open, [side]: open });
    console.log("shit", open);
  };

  return (
    <div className={classes.appBarContainer}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            onClick={handleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <div
            className={isFocused ? classes.FocusedSuperRoot : classes.superRoot}
          >
            <div className={classes.root}>
              <InputBase
                className={classes.searchInput}
                type="text"
                placeholder="Search..."
                onFocus={(e) => setIsFocused(true)}
                onBlur={(e) => setIsFocused(false)}
                onChange={(e) => e.target.value}
              />
              <span className={classes.btnContainer}>
                <IconButton
                  className={isFocused ? classes.icon : classes.icon2}
                >
                  <SearchRoundedIcon />
                </IconButton>
              </span>
            </div>
          </div>
            {/* <div className={classes.btnMainContainer}> */}
              
          <Link className={classes.link} to="/LoginPage">
          <Button className={`${classes.loginButton} ${classes.tr}`}>
            Login
          </Button>
          </Link>
            {/* </div> */}
        </Toolbar>
      </AppBar>

      {open && (
        <Drawer transitionDuration={500} open={open.left}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawer("left", false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.list}>
            {ItemList.map((item, index) => {
              // const {text, icon} = item;
              return (
                <ListItem button key={"li" + index}>
                  {/* or you can do that in this way but you should destructor the item to text -> line 191 */}
                  {/* <ListItemText primary={text} /> */}
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
