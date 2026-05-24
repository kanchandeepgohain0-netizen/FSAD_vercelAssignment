import {useState,useEffect} from 'react'

function Skills(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{return response.json()}).then((data)=> setUsers(data));
    }, [])

    return(
        <div className="card">
            <h1>My Skills</h1>
            <ul>
                <li>React</li>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>JS</li>
            </ul>
            <h2>User from API</h2>
            {users.map((user)=>{
                return(
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills;