import NavBar from "./NavBar"
import {useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { useNavigate } from "react-router-dom";
import FooterNav from './FooterNav';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function MapView (){
    let navigate = useNavigate();

    const [allAccesses, setAllAccess] = useState([])

    useEffect(()=> {
        fetch(`/water_access_points`)
        .then(accesses => accesses.json())
        .then(accesses => {
            setAllAccess(accesses)
        })
    }, [])

    const outdoorAcessMarker = L.icon({
        iconUrl: require('./outdoorAccessMarker.png'),
    
        iconSize:     [50, 70], // size of the icon
        shadowSize:   [50, 60], // size of the shadow
        iconAnchor:   [25, 70], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    function handleOnClick(id){
        navigate(`/access/${id}`)
    }

    return (
        <div>
            <NavBar />
            {allAccesses.length ?  
            <>
                <MapContainer id="map_overview" center={[41.650052, -71.468812]} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {allAccesses.map((access) => 
                    <Marker icon={outdoorAcessMarker} position={[access.lat, access.long]}>
                        <Popup >
                            <img style={{"width": "300px"}} id="card_image" src={access.water_access_images.length ? access.water_access_images[0].image_url : "https://upload.wikimedia.org/wikipedia/commons/1/14/Ireland-AtlanticOceanwithAranIsland.jpg"} onClick={()=> handleOnClick(access.id)} />
                            <b>{access.name}: </b>  
                            {access.description}
                        </Popup>
                    </Marker> )}
                </MapContainer>
            </> : <h1>loading access point information...</h1>}
            <FooterNav />
        </div>
    )
}

export default MapView