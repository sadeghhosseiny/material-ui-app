import React, {useState} from 'react';
import NavBar from './Navbar';
import Home from './Home';

function MainPage() {
    const [input, setInput] = useState('')

    return (
        <div>
            <NavBar setInput={setInput} />
            {console.log("input from parent",input)}
            <Home inputText={input} />
        </div>
    )
}

export default MainPage
