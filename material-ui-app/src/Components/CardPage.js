import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router';

const useStyle = makeStyles((theme) => ({
    root:{
        flexGrow:"1",
        background:"grey",
        width:"100%",
        height:"100%",
        position:"absolute"
    },
    
}))

function CardPage() {
    const classes = useStyle();
    const [data, setData] = useState([])
    const dataMatch = useRouteMatch();

    console.log(dataMatch.params.id)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?id=${dataMatch.params.id}`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
    }, [])

    const renderCardInfo = () => {
        return (
            <div>

            {data ? data.map(myData => {
                return(
                    <div>
                    
                    <h1 key={myData.id}>{myData.title}</h1>
                    
                    <div>
                    <img style={{width:"300px", height:"300px"}} src="https://via.placeholder.com/600/92c952" alt="square" />
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
            {renderCardInfo()}
        </div>
    )
}

export default CardPage
