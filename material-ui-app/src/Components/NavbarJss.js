import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
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
  