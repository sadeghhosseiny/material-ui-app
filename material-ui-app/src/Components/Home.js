import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {

    const [posts, setPosts] = useState([]);
    const temp = [];
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            
            let i = 0;
            //console.log("LEN",len);
            res.data.forEach(data => {
                if(i <= 50){
                   //console.log(data.length);
                    temp.push(data);
                    i++;
                    setPosts([...temp]);
                }
            }
            )
            console.log("posts",posts);
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
                {temp.map(po => {
                    return <li key={po.id}>{po.title}</li>
                })}
            </ol>
        </div>
    )
}

export default Home
