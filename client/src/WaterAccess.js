import { useParams } from 'react-router-dom';
import {useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import NavBar from './NavBar';
import Comment from './Comment';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileInput from './FileInput';
import {useContext} from "react";
import {userContext} from './App';
import ImageUpload from './ImageUpload';
import RatingsBar from './RatingsBar'

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
    const [user] = useContext(userContext);
    const reader = new FileReader()

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
        if(currentAccess.length){
            if(currentAccess.water_access_ratings.length){
            const totalRatings = currentAccess.water_access_ratings.map(rating => rating.rating)
            const averageRate = totalRatings.reduce((a, b) => a + b) / totalRatings.length
            return Math.round((averageRate+ .5/2)/.5) * .5
        }}
        else{ return 0 }
    }

    console.log(typeof(averageRating()))

    function displayStars() {
        const totalRatings = currentAccess.water_access_ratings.map(rating => rating.rating)
        const averageRate = totalRatings.reduce((a, b) => a + b) / totalRatings.length
        const rateRounded = Math.round((averageRate+ .5/2)/.5) * .5

        if (rateRounded === 0)
            { return <div class="stars">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === .5)
        { return <div class="stars">
                <span class="star half"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 1)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 1.5)
            { return <div class="stars">
                    <span class="star on"></span>
                    <span class="star half"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                </div>
                }
        else if (rateRounded === 2)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 2.5)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star half"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 3)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 3.5)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star half"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 4)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star"></span>
            </div>
            }
        else if (rateRounded === 4.5)
        { return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star half"></span>
            </div>
            }
        else if (rateRounded === 5){
            return <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
            </div>
            }
        
        
        }

    const outdoorAcessMarker = L.icon({
        iconUrl: require('./outdoorAccessMarker.png'),
    
        iconSize:     [50, 70], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [25, 70], // point of the icon which will correspond to marker's location
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
                <div id='infoBar'>
                    {currentAccess.dogs ? <div class="iconDiv"><span class="infoIcon">🐕✔️</span><p>Dog Allowed</p></div>: <div class="iconDiv"><span class="infoIcon">🐕❌</span><p>Dogs Not Allowed</p></div>}
                    {currentAccess.handicap_accessible ? <div class="iconDiv"><span class="infoIcon">♿✔️</span><p>Handicap Accessible</p></div> : <div class="iconDiv"><span class="infoIcon">♿❌</span><p>Not Handicap Accessible</p></div>}
                    {currentAccess.bathrooms ? <div class="iconDiv"><span class="infoIcon">🚻✔️</span><p>Bathrooms on Site</p></div> : <div class="iconDiv"><span class="infoIcon">🚻❌</span><p>No Bathrooms</p></div>}
                    {currentAccess.fee ? <div class="iconDiv"><span class="infoIcon">💲</span><p>Fee to Go Here</p></div> : <div class="iconDiv"><span class="infoIcon">🆓</span><p>Free to Go Here</p></div> }
                    <div class="iconDiv"><a class='infoIcon' href={`https://www.google.com/maps/dir/?api=1&destination=${currentAccess.lat}%2C${currentAccess.long}`}>🧭</a><p>Google Navigate Here</p></div>

                </div>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${currentAccess.lat}%2C${currentAccess.long}`}>Google Navigate Here</a>
                <FileInput user={user} currentAccess={currentAccess} />
                <RatingsBar averageRating={averageRating()}/>
                <h2>rating: {displayStars()} </h2>
                <h2>Details:</h2>
                <p>{currentAccess.details}</p>
                <h2>Tips:</h2>
                <p>{currentAccess.tips}</p>
                {currentAccess.water_access_comments.length ? currentAccess.water_access_comments.map(comment => <Comment commentUsers={commentUsers} comment={comment}/>) : null}
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