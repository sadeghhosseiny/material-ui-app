import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import { ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyle } from "./NavbarJss";
import { motion } from "framer-motion";

function Navbar({ setInput }) {
  const classes = useStyle();
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState({ left: false });

  
  const ItemList = [
    {
      text: "Home",
      icon: <HomeIcon color="primary" />,
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
  };

  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
      scale:1
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale:0.5
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: "1",
  };
  
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={classes.appBarContainer}
    >
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
                onChange={(e) => setInput(e.target.value)}
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
        <Drawer transitionDuration={250} open={open.left}>
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
                  {/* or you can do that in this way but you should destructor the item to text -> 2 line up */}
                  {/* <ListItemText primary={text} /> */}
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </motion.div>
  );
}

export default Navbar;
