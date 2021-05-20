import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {CSSTransition} from 'react-transition-group';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({

    "@keyframes myEffect": {
        "0%": {
          opacity: 0,
          transform: "translateY(-200%)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
      },

    item:{
        color:"white",
        backgroundColor:"grey",
        textAlign: 'center',
        width:"100px",
        height:"auto",
        padding:"6px",
        marginBottom:"10px",
        
        // padding:"10px",
        // margin:"15px"
    },

    container:{
        paddingLeft:"45px",
        paddingRight:"45px"
    },

    gridItem:{
        textAlign:"-webkit-center",
        animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
    },

    loadMoreBtn:{
        textAlign:"center",
    },

    root:{
        flexGrow:"1",
        paddingLeft:"15%"
    }

}));

function Home() {

    const classes = useStyle();
    const [posts, setPosts] = useState([]);
    const [dataSlice, setDataSlice] = useState(4);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            let i = 0;
            //console.log("LEN",len);
            res.data.forEach(data => {
                if(i <= 50){
                    setPosts(prev => [...prev, data]);
                    i++;
                }
            }
            )
    
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const showMoreItem = () => {
        setDataSlice((prevValue) => prevValue + 4)
    }

    return (
        <div className={classes.root}>

            <Grid container className={classes.container}>
                {console.log("Posts", posts)}
               
              
                    {posts ? posts.slice(0, dataSlice).map(post => {
                        return(
                            <Grid item xs={6} md={3} className={classes.gridItem} >

                                {/* <CSSTransition
                                timeout={350}
                                unmountOnExit> */}
                            <Paper className={classes.item} key={post.id}>

                                {post.title}
                            </Paper>
                        {/* </CSSTransition> */}
                        </Grid>
                            )  
                        }): "Loading"}
                
            </Grid>
            <div className={classes.loadMoreBtn}>

                    <Button variant="contained" color="primary" onClick={showMoreItem}>Load More</Button> 
            </div>
        </div>
    )
}

export default Home
