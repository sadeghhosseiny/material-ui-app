import { makeStyles } from "@material-ui/core/styles";

export const cardPageStyle = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    background: "linear-gradient(0deg, #6d3b3b, #a7969700)",
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  loading: {
    marginTop: "8%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "20px",
  },

  imageDiv: {
    display: "flex",
    justifyContent: "center",
  },

  text: {
    textAlign: "center",
    fontFamily: "Great Vibes, cursive",
    fontSize: "32px",
  },
}));
