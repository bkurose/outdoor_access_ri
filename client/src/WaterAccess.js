import { useParams } from 'react-router-dom';
import {useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import NavBar from './NavBar';
import Comment from './Comment';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function WaterAccess (){
    const { id } = useParams()
    const [currentAccess, setCurrentAccess] = useState([])
    const [commentUsers, setCommentUsers] = useState([])
    const [showNewComment, setShowNewComment] = useState(false)

    useEffect(()=> {
        fetch(`/water_access_points/${id}`)
        .then(access => access.json())
        .then(access => {
            setCurrentAccess(access)
        })
        fetch('/users')
        .then(res => res.json())
        .then(res => {
          setCommentUsers(res)
        })
    }, [id])

    console.log(currentAccess)

    function handleOpenComment(){
        setShowNewComment(true)
    }
    function handleCloseComment(){
        setShowNewComment(false)
    }

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
                            {currentAccess.description}
                        </Popup>
                    </Marker>
                </MapContainer>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${currentAccess.lat}%2C${currentAccess.long}`}>Google Navigate Here</a>
                <h2>rating: {averageRating()} </h2>
                <h2>Details:</h2>
                <p>{currentAccess.details}</p>
                <h2>Tips:</h2>
                <p>{currentAccess.tips}</p>
                {currentAccess.water_access_comments.map(comment => <Comment commentUsers={commentUsers} comment={comment}/>)}
                {showNewComment ? <>
                    <Form>
                        <Button onClick={handleCloseComment} style={{"float": "right"}}>X</Button>
                        <Form.Group className="mb-3" controlId="newCommentTitle">
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="newComment">
                            <Form.Control type="text" placeholder="Comment..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </> : <Button variant="primary" onClick={handleOpenComment}>Add Comment</Button>}
            </>
            }
            </div>
    )
}

export default WaterAccess