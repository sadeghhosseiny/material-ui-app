import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import {cardPageStyle} from './CardPageJss';


function CardPage(){
    const classes = cardPageStyle();
    const [data, setData] = useState([])
    const dataMatch = useRouteMatch();
    const [temp, setTemp] = useState(false);
    const [wait, setWait] = useState(0)

    console.log(dataMatch.params.id);
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

    useEffect(async() => {
        
        setTemp(true);
        axios.get(`https://jsonplaceholder.typicode.com/photos?id=${dataMatch.params.id}`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
        setWait(await sleep(3000));
        setTemp(false);
            
        }, [])

    const renderCardInfo = () => {
        return (
            <div>

            {data ? data.map(myData => {
                return(
                    <div>
                    <div className={classes.text}>

                        <h2 key={myData.id}>{myData.title}</h2>
                    </div>
                    
                    <div className={classes.imageDiv}>
                    <img className={classes.image} src="https://via.placeholder.com/600/92c952" alt="square" />
                    </div>
                    </div>
                    )
                }
                ):""}
                </div>
                )
            }    
            
            return (
             <div className={classes.root}>
                {wait}
                <div>
                {temp ? <CircularProgress thickness={3} size="70px" className={classes.loading} color="primary" /> : renderCardInfo()}
                    
                </div>
             </div>
    )
}

export default CardPage
