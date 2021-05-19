import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Home() {

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
        <div>
            {console.log(posts)}
            <ol>
                {posts.map(po => {
                    return <li key={po.id}>{po.title}</li>
                })}
            </ol>
        </div>
    )
}

export default Home
