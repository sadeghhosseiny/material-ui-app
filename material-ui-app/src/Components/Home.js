import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-grid-carousel";
import "./home.css";
import CardItem from "./CardItem";
import Pagination from "@material-ui/lab/Pagination";
import {useStyle} from './HomeJss';


function Home(props) {
  const classes = useStyle();
  const [posts, setPosts] = useState([]);
  const [dataSlice, setDataSlice] = useState(4);
  const [bool, setBool] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [temp, setTemp] = useState(0);
  const [tempArr, setTempArr] = useState([]);
  // const [state, setstate] = useState(initialState)

  const indexOflast = page * perPage;
  const indexOffirst = indexOflast - perPage;
  const currentPosts = posts.slice(indexOffirst, indexOflast);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const filteredTitles = posts.filter(post => {
    return post.title.toLowerCase().includes(props.inputText.toLowerCase().trim());
    //if you want to search letter by letter you should use "startsWith()"
    //post.title.toLowerCase().startsWith(props.inputText.toLowerCase());

  })
  
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      let i = 0;
      //console.log("LEN",len);
      res.data.forEach((data) => {
        if (i <= 34) {
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

  // const exe = (id) => {
  //   const newList = posts.filter(post => (post.id !== id))
  //   setPosts(newList);
  // }
  const renderData = () => {
    return (
      <Grid container className={classes.container}>
        {console.log("Posts", posts)}

        {filteredTitles
          ? filteredTitles.slice(0, dataSlice).map((post) => {
            return (
              <Grid item xs={6} md={3} className={classes.gridItem} /*onClick={() => exe(post.id)}*/ >
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
  let index = parseInt( len / 4);

  const showMoreItem = async () => {
    setDataSlice((prevValue) => prevValue + 4);
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
      <Carousel
        className={classes.carouselItem}
        cols={4}
        rows={1}
        gap={10}
        
      >
        {console.log("Posts", posts)}
        {posts ? posts.map((post) => {
              return (
                <Carousel.Item >
                  <CardItem data={post} />
                </Carousel.Item>
              );
            })
          : "Loading"}
      </Carousel>
      <hr />
      <hr />
      <div>{renderData()}</div>

      <div className={`${classes.btn} ${bool ? classes.loadMoreBtn : ""}`}>
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
            <div style={{ padding: "15px" }} key={cr.id}>
              {cr.title}
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
