import { useParams } from 'react-router-dom';
import {useEffect, useState, Suspense } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

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

    console.log(typeof currentAccess.long)

    return (
        <div>
            <h1>{currentAccess.name}</h1>
            {!currentAccess.long ? null : 
            <Suspense fallback={<h1>Loading posts...</h1>}>
            <MapContainer id="map" center={[currentAccess.lat, currentAccess.long]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[currentAccess.lat, currentAccess.long]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </Suspense>}
        </div>
    )
}

export default WaterAccess