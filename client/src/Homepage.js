import React, { useState, useEffect } from 'react';
import Login from "./Login"
import Logout from "./Logout"
import AccessCard from "./AccessCard"

function Homepage (){    
    const [accesses, setAccesses] = useState([])
    
    useEffect(() => {
        fetch("/water_access_points")
        .then(res => res.json())
        .then(data =>{
            setAccesses(data)
        })
    }, [])

    const showAccesses = accesses.map((access_point)=> <AccessCard access_point={access_point} />)
    return (
        <div>
            <h1>Homepage</h1>
                <Login />
                <Logout />
                {showAccesses[0]}
                {showAccesses[1]}
                {showAccesses[2]}
        </div>
    )
}

export default Homepage