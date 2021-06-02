import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router';

function CardPage() {
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
    
    return (
        <div>
            {data ? data.map(myData => {
                return(
                    <div>

                    <h1 key={myData.id}>{myData.title}</h1>
                    <img style={{width:"300px", height:"300px"}} src="https://via.placeholder.com/600/92c952" alt="square" />
                    </div>
                    )
                }
            ):""}
        </div>
    )
}

export default CardPage
