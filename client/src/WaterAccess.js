import { useParams } from 'react-router-dom';
import {useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import NavBar from './NavBar';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function WaterAccess (){
    const { id } = useParams()
    const [currentAccess, setCurrentAccess] = useState([])

    useEffect(()=> {
        fetch(`/water_access_points/${id}`)
        .then(access => access.json())
        .then(access => {
            setCurrentAccess(access)
        })
    }, [id])

    console.log(currentAccess.water_access_ratings)

    function averageRating() {
        const totalRatings = currentAccess.water_access_ratings.map(rating => rating.rating)
        return totalRatings.reduce((a, b) => a + b) / totalRatings.length;
    }

    const outdoorAcessMarker = L.icon({
        iconUrl: require('./outdoorAccessMarker.png'),
    
        iconSize:     [50, 70], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (
        <div>
            <NavBar />
            {!currentAccess.long ? <h1>loading access point information...</h1> : 
            <>
                <h1>{currentAccess.name}</h1>
                <MapContainer id="map" center={[currentAccess.lat, currentAccess.long]} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={outdoorAcessMarker} position={[currentAccess.lat, currentAccess.long]}>
                        <Popup>
                            <b>{currentAccess.name}: </b>  
                            {currentAccess.details}
                        </Popup>
                    </Marker>
                </MapContainer>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${currentAccess.lat}%2C${currentAccess.long}`}>Google Navigate Here</a>
                <h2>rating: {averageRating()} </h2>
                <h2>comments:</h2>
                {currentAccess.water_access_comments.map(comment => <p>{comment.comment}</p>)}
            </>
            }
            </div>
    )
}

export default WaterAccess