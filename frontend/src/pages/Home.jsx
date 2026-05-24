// import './index.css'
import {useState} from 'react';

function Home(){
    const [count,setCount] = useState(0);
    return(
        <div className="card">
            <div id="bio"></div>
                <h1>Bio</h1>
                <p>My name is Kanchandeep Gohain. I am a Bachelor of Technology Computer Sciencestudent at Dhemaji Engineering College.<br/> 
                   I am person who focuses on improving and refining my skills by consuming knowlede from college professors, my friends and online resources.<br/>
                   I enjoy participating in coding competitions and hackathons to challenge myself and learn from others.
                   Apart from that, I also like to play volleyball.
                </p>
            <div/>
            <div id="count">
                <h1>Count</h1>
                <h1>{count}</h1>
                <button onClick ={()=>{setCount(count + 1)}}>Add</button>
            </div>
        </div>
    )
}

export default Home;