import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles((theme) => ({
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

    searchInputDiv:{
      position:"relative",
      width:"20%",
      margin:"16px 34px",
      padding:"7px 12px",
      background: "purple",
      borderRadius:"4px",
    },

    searchIconDiv:{
      position:"absolute",

    },

    searchIcon:{
      paddingTop:"4px",
    }

}))

function Navbar() {
    const classes = useStyle();
    return(

        <div>
        <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <div className={classes.searchInputDiv}>
            <div className={classes.searchIconDiv}>
              <SearchIcon className={classes.searchIcon} />
            </div>
            <InputBase color="secondary" placeholder="Search..." />
          </div>
        {/* <div className={classes.container}> */}

          <Button className={`${classes.loginButton} ${classes.tr}`} >Login</Button>
        {/* </div> */}
        </Toolbar>
      </AppBar>
    </div>
        )

}

export default Navbar;
