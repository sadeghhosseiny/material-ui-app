import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from 'clsx';
import { Grid, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Carousel from 'react-grid-carousel';
import "./home.css";
import CardItem from "./CardItem";
import Pagination from '@material-ui/lab/Pagination';
import { data } from "jquery";

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
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  // carouselItem:{
  //   backgroundColor:"grey",
  //   width:"145px",
  //   height:"135px",
  //   // borderRadius:"8px",
  //   color:"white",
  //   padding:"12px",
  //   transition: "transform .5s",
  //   "&:hover":{
  //     backgroundColor:"grey",
  //     transform:"scale(1.5)",
  //     borderRadius:"8px",
  //     transitions:".5s linear"
  //   }
  // },

}));

function Home() {
  const classes = useStyle();
  const [posts, setPosts] = useState([]);
  const [dataSlice, setDataSlice] = useState(2);
  const [bool, setBool] = useState(false);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const [data, setData] = useState([]);
 // const [state, setstate] = useState(initialState)

 
 
  const indexOflast = page * perPage;
  const indexOffirst = indexOflast - perPage;
  const currentPosts = posts.slice(indexOffirst, indexOflast);
  //setData(currentPosts);
 
 const handlePagination = (event, value) => {
   setPage(value);
  //  const Offset = page * perPage;
  //  setOffset(Offset);
  }
  
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      let i = 0;
      //console.log("LEN",len);
      res.data.forEach((data) => {
        if (i <= 7) {
          setPosts((prev) => [...prev, data]);
          i++;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  // useEffect(() => {
  //   pd();
  // }, [offset, posts])

  //remember:when you use .map(something => {}) in map, you sould return in curly bracket
  //otherwise .map(something=>) it doesn't need
  
  // const pd = () => {
  //   console.log("pst", posts)
  //   const Slice = posts.slice(offset, offset + perPage);
  //   console.log("SLC", Slice); 
    

  //     const pd = Slice.map(post => 
        
  //         <div style={{padding:"8px"}} key={post.id}>
  //           {post.id}
  //       {console.log(post.id)}
  //     </div>
      
  //   )
  //   setData(pd);
  // }

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

  // const paginate = () => {
  //   const data = posts ? posts : [];
  //   console.log("pst", posts);
  //   console.log("ddtt", data);
  //   const postData = Slice.map( pd => {
  //     return(<div key={pd.id} style={{display:"flex"}}>
  //       {pd.id}
  //     </div>)
  //   })
  //   setData(postData);
  //   setPageCount(Math.ceil(data.length / perPage));
  // }

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
         {/* <Carousel className={classes.carouselItem} cols={4} rows={1} gap={10} > */}
  
                {/* {console.log("Posts", posts)}
                {posts ? posts.map(post => {
                    return( */}

                            {/* // <Carousel.Item >
                            //   <CardItem data={post} /> */}
                              {/* <Card key={post.id} className="ic">
                                <CardContent content="p">
                                  {post.title}
                                </CardContent>
                                <CardActions>
                                  <IconButton className={clsx(classes.expand, {
                                              [classes.expandOpen]: expand,
                                                      })}
                                        onClick={handleExpand}
                                        aria-expanded={expand}
                                        aria-label="show more">
                                    <ExpandMoreIcon />
                                  </IconButton>
                                </CardActions>
                                <Collapse key={post.id} in={expand} timeout={250} unmountOnExit>
                                  <CardContent>
                                    <Typography>
                                      {post.body}
                                    </Typography>
                                  </CardContent>
                                </Collapse>
                              </Card> */}
                           
                {/* //             </Carousel.Item>
                        
                //         )  
                //     }): "Loading"}
                
                // </Carousel> */}
                {/* <hr />
                <hr /> */}
                {/* <div>
                  {renderData()}
                </div> */}

      {/* <div className={` ${bool ? classes.loadMoreBtn : ""}`}>
        <Button
          id="lm"
          variant="contained"
          color="primary"
          onClick={showMoreItem}
        >
          Load More
        </Button>
      </div>
      <hr /> */}
      {/* <div>
        {posts ? posts.slice(0, 2).map(post => {
          return(
          <p key={post.id}>{post.id}</p>
          )
        
        }):""}
      </div> */}
      <div>
         {currentPosts.map(cr => {
           return<div key={cr.id}>{cr.id}</div>
         })}
      </div>

     <Typography>PAGE {page}</Typography>
    <div style={{display:"flex"}}>

     {data}
      </div>
        <Pagination page={page} onChange={handlePagination} 
              count={Math.ceil(posts.length / 2)} siblingCount={1} boundaryCount={1} >
            
        </Pagination>
    
    </div> 
    
  );
}

export default Home;
