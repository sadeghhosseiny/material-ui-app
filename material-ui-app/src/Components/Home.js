import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-grid-carousel";
import "./home.css";
import CardItem from "./CardItem";
import Pagination from "@material-ui/lab/Pagination";

const useStyle = makeStyles((theme) => ({
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

  moreBtn: {
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

function Home(props) {
  const classes = useStyle();
  const [posts, setPosts] = useState([]);
  const [dataSlice, setDataSlice] = useState(3);
  const [bool, setBool] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(0);
  // const [state, setstate] = useState(initialState)

  const indexOflast = page * perPage;
  const indexOffirst = indexOflast - perPage;
  const currentPosts = posts.slice(indexOffirst, indexOflast);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const filteredTitles = posts.filter(post => {
    return post.title.toLowerCase().includes(props.inputText.toLowerCase());
  })

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        let i = 0;
        //console.log("LEN",len);
        res.data.forEach((data) => {
          if (i <= 19) {
            setPosts((prev) => [...prev, data]);
            i++;
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //remember:when you use .map(something => {}) in map, you sould return in curly bracket
  //otherwise .map(something=>) it doesn't need

  const renderData = () => {
    return (
      <Grid container className={classes.container}>
        {console.log("Posts", posts)}
        {filteredTitles
          ? filteredTitles.slice(0, dataSlice).map((post) => {
              return (
                <Grid item xs={6} md={3} className={classes.gridItem}>
                  <Paper id="pap" className={classes.item} key={post.id}>
                    {(post.title)}
                  </Paper>
                </Grid>
              );
            })
          : "Loading"}
      </Grid>
    );
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let len = posts.length;
  let index = parseInt( len / 3);

  const showMoreItem = async () => {
    setDataSlice((prevValue) => prevValue + 3);
    setTemp(temp + 1);
    if(temp >= index - 1)
    {
      setBool(false)
    }
    else{

      setBool(true);
      await sleep(500);
      setBool(false);
    }
    console.log("TEMP, index", temp, index);
  };

  return (
    <div className={classes.root}>
      {console.log("inputText from Home",props.inputText)}
      <Carousel
        className={classes.carouselItem}
        cols={4}
        rows={1}
        gap={10}
      >
        {console.log("Posts", posts)}
        {posts ? posts.map((post) => {
              return (
                <Carousel.Item>
                  <CardItem data={post} />
                </Carousel.Item>
              );
            })
          : "Loading"}
      </Carousel>
      <hr />
      <hr />
      <div>{renderData()}</div>

      <div className={` ${bool ? classes.loadMoreBtn : ""}`}>
        <Button
          id="lm"
          variant="contained"
          color="primary"
          onClick={showMoreItem}
        >
          Load More
        </Button>
      </div>
      <hr />

      <div style={{ display: "flex", padding: "6px" }}>
        {currentPosts.map((cr) => {
          return (
            <div style={{ padding: "8px" }} key={cr.id}>
              {cr.id}
            </div>
          );
        })}
      </div>

      <Typography>PAGE {page}</Typography>

      <Pagination
        page={page}
        onChange={handlePagination}
        color="secondary"
        count={Math.ceil(posts.length / 2)}
        siblingCount={1}
        boundaryCount={1}
      ></Pagination>
    </div>
  );
}

export default Home;
