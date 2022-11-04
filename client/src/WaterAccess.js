import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

function WaterAccess (){
    const { id } = useParams()
    const [currentAccess, setCurrentAccess] = useState([])

    useEffect(()=> {
        fetch(`/water_access_points/${id}`)
        .then(access => access.json())
        .then(access => {
            setCurrentAccess(access)
            console.log(currentAccess)
        })
    }, [])
    console.log(currentAccess)

    return (
        <div>
            <h1>{currentAccess.name}</h1>
        </div>
    )
}

export default WaterAccess