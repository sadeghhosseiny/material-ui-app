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
    padding: "2% 8% 1% 8%",
  },

  carouselItem:{
    backgroundColor:"grey",
    width:"145px",
    height:"135px",
    borderRadius:"8px",
    color:"white",
    padding:"12px"
  }

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

  const renderData = () => {
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

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const showMoreItem = async () => {
    setDataSlice((prevValue) => prevValue + 4);
    setBool(true);
    await sleep(500);
    // setTimeout(() => {
    //     setBool(false);

    // }, 1000)
    setBool(false);
  };

  return (
      
    <div className={classes.root}>
    
         <Carousel className={classes.carouselItem} cols={4} rows={1} gap={10} >
  
                {console.log("Posts", posts)}
                {posts ? posts.map(post => {
                    return(

                        <Carousel.Item >
                          <div className={classes.carouselItem}>

                          {post.title}
                          </div>
                        </Carousel.Item>
                        
                        )  
                    }): "Loading"}
                
                </Carousel>
                <hr />
                <hr />
                <div>
                  {renderData()}
                </div>

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

    
    </div> 
    
  );
}

export default Home;
