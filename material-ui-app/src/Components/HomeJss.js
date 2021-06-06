import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  "@keyframes loadMoreData": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes loadMoreBtn": {
    "0%": {
      //   opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      //   opacity: 1,
      transform: "translateY(0)",
    },
  },

  item: {
    color: "white",
    backgroundColor: "grey",
    textAlign: "center",
    width: "100px",
    height: "auto",
    padding: "6px",
    marginBottom: "10px",

    // padding:"10px",
    // margin:"15px"
  },

  container: {
    paddingLeft: "45px",
    paddingRight: "45px",
  },

  gridItem: {
    textAlign: "-webkit-center",
    animation: `$loadMoreData 300ms ${theme.transitions.easing.easeInOut}`,
  },

  loadMoreBtn: {
    // textAlign:"center",
    animation: `$loadMoreBtn 300ms ${theme.transitions.easing.easeInOut}`,
  },

  btn: {
    textAlign: "center",
  },

  root: {
    flexGrow: "1",
    padding: "2% 8% 12% 8%",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
