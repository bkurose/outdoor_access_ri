import React, { useState, useEffect } from 'react';
import AccessCard from "./AccessCard"
import NavBar from "./NavBar"

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
            <NavBar />
            <h1>Homepage</h1>
                {showAccesses[0]}
                {showAccesses[1]}
                {showAccesses[2]}
        </div>
    )
}

export default Homepage