import { makeStyles } from "@material-ui/core/styles";

export const myStyleCss = makeStyles((theme) => ({
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

  card: {
    transition: "transform 0.5s",
    transition: "0.5s",
    fontFamily: "Lobster, cursive",
    fontSize: "26px",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "3px 3px 3px 5px rgb(0.5, 0.5, 0, 0.5)",
    },
  },

  bodyTitle: {
    fontFamily: "Lobster, cursive",
    fontSize: "26px",
  },

  buttonTitle: {
    fontFamily: "Fredoka One, cursive",
  },

  link: {
    textDecoration: "none",
  },
}));
