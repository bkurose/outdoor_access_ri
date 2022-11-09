import { useState, useEffect } from 'react';
import AccessCard from "./AccessCard"
import NavBar from "./NavBar"
import SearchBar from './SearchBar';

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
            <SearchBar />
            <h1>Homepage</h1>
            <div id='example-cards'>
                {showAccesses.slice(0,3)}
            </div>
        </div>
    )
}

export default Homepage