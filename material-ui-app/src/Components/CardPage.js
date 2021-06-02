import axios from 'axios';
import React, {useEffect} from 'react';
import { useRouteMatch } from 'react-router';

function CardPage() {
    const data = useRouteMatch();
    console.log(data.params.id)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${data.params.id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err=> {
            console.log(err);
        })
    }, [])
    
    return (
        <div>
            <h1>This is Card page</h1>
        </div>
    )
}

export default CardPage
