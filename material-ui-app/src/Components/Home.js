import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {

    const [posts, setPosts] = useState([]);
    const temp = [];
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            const len = res.data.length - 50;
            res.data.forEach(data => {
               for(let i = 0; i < len; i ++)
               {
                    temp.push(data);
                    //setPosts([...temp, data]);
               }
            }
            )
            console.log("TEMP", temp);
                //console.log(data);
    
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div>
            <ol>
                {temp ? temp.map(po => {
                    return <li key={po.id}>{po.title}</li>
                }): "Loading"}
            </ol>
        </div>
    )
}

export default Home
