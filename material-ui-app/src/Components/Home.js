import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import Button from "@material-ui/core/Button";
import ReactDOM from "react-dom";
import $ from "jquery";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-grid-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { CallMissedSharp } from "@material-ui/icons";

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
    animation: `$loadMoreData 500ms ${theme.transitions.easing.easeInOut}`,
  },

  loadMoreBtn: {
    // textAlign:"center",
    animation: `$loadMoreBtn 500ms ${theme.transitions.easing.easeInOut}`,
  },

  moreBtn: {
    textAlign: "center",
  },

  root: {
    flexGrow: "1",
    paddingLeft: "15%",
  },

  App: {
    backgroundColor: "#5c2e91",
    backgroundColor: "#fff",
    color: "#fff",
    color: "#3498db",
    textAlign: " center",
  },
}));

function Home() {
  const classes = useStyle();
  const [posts, setPosts] = useState([]);
  const [dataSlice, setDataSlice] = useState(4);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        let i = 0;
        //console.log("LEN",len);
        res.data.forEach((data) => {
          if (i <= 50) {
            setPosts((prev) => [...prev, data]);
            i++;
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderSlides = () => {
    return (
      <Grid container className={classes.container}>
        {console.log("Posts", posts)}
        {posts
          ? posts.slice(0, dataSlice).map((post) => {
              return (
                <Grid item xs={6} md={3} className={classes.gridItem}>
                  <Paper id="pap" className={classes.item} key={post.id}>
                    {post.title}
                  </Paper>
                </Grid>
              );
            })
          : "Loading"}
      </Grid>
    );
  };
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: dataSlice + 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: dataSlice - 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: dataSlice - 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: dataSlice - 3
      }
    };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const showMoreItem = async () => {
    setDataSlice((prevValue) => prevValue + 4);
    setBool(true);
    await sleep(1000);
    // setTimeout(() => {
    //     setBool(false);

    // }, 1000)
    setBool(false);
  };

  return (
      
    // <div className={classes.root}>
    <>
         <Carousel cols={1} rows={1} gap={2} >
        {/* <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 1</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 2</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 3</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 4</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 5</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 6</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 7</div>
      </Carousel.Item>
        <Carousel.Item>
                <div style={{background:"black", width:"200px", height:"200px"}}>Item 8</div>
      </Carousel.Item> */}
        {/* <div> */}
            {/* {renderSlides()} */}
        {/* </div> */}

      {/* </div> */}
      {/* <Grid container className={classes.container}> */}
                {console.log("Posts", posts)}
                {posts ? posts.slice(0, dataSlice).map(post => {
                    return(
                        
                        
                        
                        
                        
                        
                        <Carousel.Item>
                        {post.title}
                            </Carousel.Item>
                        //     {/* <Paper id="pap" className={classes.item} key={post.id}> */}
                        // {/* </Paper> */}
                        
                        // {/*<Grid item xs={6} md={3} className={classes.gridItem} >*/}
                        
                        // {/* </Grid> */}
                        
                        )  
                    }): "Loading"}
                    
                    {/* </Grid> */}
                
                </Carousel>

      {/* <div className={` ${bool ? classes.loadMoreBtn : ""}`}>
        <Button
          id="lm"
          variant="contained"
          color="primary"
          onClick={showMoreItem}
        >
          Load More
        </Button>
      </div> */}

    
    {/* </div> */}
    </>
  );
}

export default Home;
