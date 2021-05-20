import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    item:{
        color:"white",
        backgroundColor:"grey",
        textAlign: 'center',
        width:"100px",
        height:"auto",
        padding:"6px",
        // padding:"10px",
        // margin:"15px"
    },

    root:{
        flexGrow:"1"
    }

}));

function Home() {

    const classes = useStyle();
    const [posts, setPosts] = useState([]);

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

    return (
        <div className={classes.root}>
            <Grid container>
                {console.log("Posts", posts)}
               
              
                    {posts ? posts.map(post => {
                        return(
                            <Grid item xs={6} md={1} >

                            <Paper className={classes.item} key={post.id}>

                                {post.title}
                            </Paper>
                        </Grid>
                            )  
                        }): "Loading"} 
                
            </Grid>
        </div>
    )
}

export default Home
