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
            console.log(accesses)
            setAccesses(data)
        })
    }, [])

    console.log(accesses)
    return (
        <div>
            <h1>Homepage</h1>
                <Login />
                <Logout />
                <AccessCard />
        </div>
    )
}

export default Homepage