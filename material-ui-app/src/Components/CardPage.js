import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles((theme) => ({
    root:{
        flexGrow:"1",
        background:"grey",
        width:"100%",
        height:"100%",
        position:"absolute"
    },

    loading:{
        marginTop:"8%",
        display:"flex",
        marginLeft:"auto",
        marginRight:"auto"
    },

    image:{
        width:"200px",
        height:"200px",
        borderRadius:"20px"        
    },

    imageDiv: {
        display:"flex",
        justifyContent:"center"
    },

    text:{
        textAlign:"center"
    }
    
}))

function CardPage() {
    const classes = useStyle();
    const [data, setData] = useState([])
    const dataMatch = useRouteMatch();
    const [temp, setTemp] = useState(false)

    console.log(dataMatch.params.id)

    useEffect(() => {
        setTimeout(() => {
            setTemp(!temp);
            axios.get(`https://jsonplaceholder.typicode.com/photos?id=${dataMatch.params.id}`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err=> {
                console.log(err);
            })
        }, 2000)
        }, [])

    const renderCardInfo = () => {
        return (
            <div>

            {data ? data.map(myData => {
                return(
                    <div>
                    <div className={classes.text}>

                        <h1 key={myData.id}>{myData.title}</h1>
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
                {!temp ? <CircularProgress thickness={3} size="70px" className={classes.loading} color="primary" /> : ""}
                <div>
                    {renderCardInfo()}
                </div>
             </div>
    )
}

export default CardPage
