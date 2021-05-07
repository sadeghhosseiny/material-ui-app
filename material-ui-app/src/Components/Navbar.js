import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
//import useIsFocusVisible from '../utils/useIsFocusVisible';
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
  superRoot: {
    width: "280px",
    transition: "300ms"
  },
  FocusedSuperRoot: {
    width: "480px",
    transition: "300ms"
  },
  root: {
    position: "relative",
    width: "100%"
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
    transition: "200ms"
  },
  btnContainer: {
    position: "absolute",
    top: "8px",
    left: "16px"
  },
  icon: {
    padding: "7px"
  },
    menuButton: {
        marginRight: "5px",
    },
    loginButton: {
        marginLeft: "auto",
        color:"white",
        padding:"8px 20px",
        backgroundSize:"200%",
        // transition:"all 1s linear",
        transition:"0.5s ease-out",
        
        '&:hover':{
            // backgroundImage:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            backgroundPosition:"right",
            transform:"scale(1.1)",
           
        }
    },

    tr:{
        backgroundImage:"linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)",
    },

}))


function Navbar() {
  
  const classes = useStyle();
  const [isFocused, setIsFocused] = useState(false)


    return(

        <div>
        <AppBar position="static" >
        <Toolbar>
          <IconButton className={classes.menuButton} edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <div className={isFocused ? classes.FocusedSuperRoot : classes.superRoot}>
      <div className={classes.root}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder="Search..."
          onFocus={(e) => setIsFocused(true)}
          onBlur={(e) => setIsFocused(false)}
          onChange={(e) => console.log(e.target.value)}
        />
        <span className={classes.btnContainer}>
          <IconButton className={classes.icon}>
            <SearchRoundedIcon />
          </IconButton>
        </span>
      </div>
    </div>

          <Button className={`${classes.loginButton} ${classes.tr}`} >Login</Button>

        </Toolbar>
      </AppBar>
    </div>
        )

}

export default Navbar;
