import NavBar from './NavBar'
import { useState} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FooterNav from './FooterNav';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function NewAccess (){
    const loginStorage = sessionStorage.getItem("login_status")
    const [loginStatus, setLoginStatus] = useState(loginStorage)
    const [position, setPosition] = useState(null)
    const MapEvents = () => {
        useMapEvents({
          click(e) {
            setPosition(e.latlng)
            setAccessData({...accessData, 
                lat: e.latlng.lat,
                long: e.latlng.lng
            })

            // coords exist in "e.latlng.lat" and "e.latlng.lng"

          },
        });
        return false;
    }

    const [ accessData, setAccessData ] = useState({
        name: "",
        town: "",
        handicap_accessible: false,
        traffic: "",
        dogs: false,
        access_type: "",
        lat: "",
        long: "",
        parking: "",
        details: "",
        description: "",
        trail_map: "",
        bathrooms: false,
        fee: false,
    });

    const [validated, setValidated] = useState(false);
    const handleOnChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        if(event.target.type === "checkbox"){value = event.target.checked}
    
        setAccessData({...accessData, [name]: value})
    }

    console.log(accessData.long)
    
    const outdoorAcessMarker = L.icon({
        iconUrl: require('./outdoorAccessMarker.png'),
    
        iconSize:     [50, 70], // size of the icon
        shadowSize:   [50, 60], // size of the shadow
        iconAnchor:   [25, 70], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [5, -90] // point from which the popup should open relative to the iconAnchor
    });
    function handleSubmit(e){
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          alert("Please fill out the registration form properly" )
          setValidated(true)
        }
        else{
        e.preventDefault()
        setValidated(true)
        fetch("/water_access_points", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json" 
          },
          body: JSON.stringify(accessData)
        })
        .then(res => res.json())
        .then(access => {
          console.log(access)
        })
      }
      }

    return ( //needs post to collabs, validations
        <div>
            <NavBar />
            {loginStatus ? <>
            <div id="new_access">
                <div id='input_container'>
                <div id='input_map_container'>

                <MapContainer id="input_map" center={[41.650052, -71.468812]} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapEvents />
                    {position === null ? null : <Marker icon={outdoorAcessMarker}  position={position}>  <Popup >New Access Location</Popup>
                    </Marker> }
                </MapContainer>

                </div>
                
                <div id='form_container'>

                <Form id="new_access_form" noValidate validated={validated} onSubmit={handleSubmit} >
                    {accessData.long === "" ? <Form.Label className="form_item" style={{"font-size": "20px"}}>Please select a point on the map:<br/></Form.Label> : <><Form.Label className="form_item" style={{"font-size": "20px"}}>Please select a point on the map: </Form.Label><Form.Label >Point Found: Latitude: {accessData.lat}, Longitude: {accessData.long}</Form.Label></>}
                    <Form.Group className="form_item" controlId="name">
                        <Form.Control
                        type="text"
                        placeholder="Access Point Name"
                        autoFocus
                        name="name"
                        value={accessData.name}
                        onChange={handleOnChange}
                        required
                        minLength="1"
                        maxLength="240"
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter a name for this access point.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form_item" >
                        <Form.Select 
                            aria-label="Default select example"
                            name="town"
                            value={accessData.town}
                            onChange={handleOnChange}
                            required
                        >
                            <option disabled={true} value="">Town</option>
                            <option value="Barrington">Barrington</option>
                            <option value="Bristol">Bristol</option>
                            <option value="Burrillville">Burrillville</option>                        
                            <option value="Central Falls">Central Falls</option>
                            <option value="Charlestown">Charlestown</option>
                            <option value="Coventry">Coventry</option>                        
                            <option value="Cranston">Cranston</option>
                            <option value="Cumberland">Cumberland</option>
                            <option value="East Greenwich">East Greenwich</option>                        
                            <option value="East Providence">East Providence</option>
                            <option value="Exeter">Exeter</option>
                            <option value="Foster">Foster</option>
                            <option value="Glocester">Glocester</option>
                            <option value="Hopkinton">Hopkinton</option>
                            <option value="Jamestown">Jamestown</option>                        
                            <option value="Johnston">Johnston</option>
                            <option value="Lincoln">Lincoln</option>
                            <option value="Little Compton">Little Compton</option>                        
                            <option value="Middletown">Middletown</option>
                            <option value="Narragansett">Narragansett</option>
                            <option value="New Shoreham">New Shoreham</option>                        
                            <option value="Newport">Newport</option>
                            <option value="North Kingstown">North Kingstown</option>
                            <option value="North Providence">North Providence</option>
                            <option value="North Smithfield">North Smithfield</option>
                            <option value="Pawtucket">Pawtucket</option>
                            <option value="Portsmouth">Portsmouth</option>
                            <option value="Providence">Providence</option>
                            <option value="Richmond">Richmond</option>
                            <option value="Scituate">Scituate</option>
                            <option value="Smithfield">Smithfield</option>
                            <option value="South Kingstown">South Kingstown</option>
                            <option value="Tiverton">Tiverton</option>
                            <option value="Warren">Warren</option>
                            <option value="Warwick">Warwick</option>
                            <option value="West Greenwich">West Greenwich</option>
                            <option value="West Warwick">West Warwick</option>
                            <option value="Westerly">Westerly</option>
                            <option value="Woonsocket">Woonsocket</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form_item">
                        <Form.Select 
                            aria-label="Default select example"
                            name="traffic"
                            value={accessData.traffic}
                            onChange={handleOnChange}
                            required
                        >
                            <option disabled={true} value="">Traffic</option>
                            <option value="light">Light</option>
                            <option value="medium">Medium</option>
                            <option value="heavy">Heavy</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="form_item" controlId="description">
                        <Form.Control
                        type="text"
                        placeholder="A brief sentence desribing the Access Point"
                        autoFocus
                        name="description"
                        value={accessData.description}
                        onChange={handleOnChange}
                        required
                        minLength="1"
                        maxLength="240"
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter a brief description for this access point.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form_item" controlId="details">
                        <Form.Control
                        type="text"
                        placeholder="More in-depth details about the Access Point"
                        autoFocus
                        name="details"
                        value={accessData.details}
                        onChange={handleOnChange}
                        required
                        minLength="1"
                        maxLength="1000"
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter some more details about the Access Point
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form_item" controlId="parking">
                        <Form.Control
                        type="text"
                        placeholder="What's the parking situation here?"
                        autoFocus
                        name="parking"
                        value={accessData.parking}
                        onChange={handleOnChange}
                        required
                        minLength="1"
                        maxLength="1000"
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter some more details about the parking here
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form_item" controlId="access_type">
                        <Form.Control
                        type="text"
                        placeholder="Access type? (ROW, park, dock)"
                        autoFocus
                        name="type"
                        value={accessData.access_type}
                        onChange={handleOnChange}
                        required
                        minLength="1"
                        maxLength="128"
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter an access type
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form_switch" >
                    <Form.Check 
                        type="switch"
                        id="handicapped-switch"
                        label="Handicap Accessible?"
                        name="handicap_accessible"
                        value={accessData.handicap_accessible}
                        onChange={handleOnChange}
                    />
                    </Form.Group>
                    <Form.Group className="form_switch" >
                    <Form.Check 
                        type="switch"
                        id="dogs-switch"
                        label="Are dogs allowed here?"
                        name="dogs"
                        value={accessData.dogs}
                        onChange={handleOnChange}

                    />
                    </Form.Group>
                    <Form.Group className="form_switch" >
                    <Form.Check 
                        type="switch"
                        id="bathrooms-switch"
                        label="Public Restrooms?"
                        name="bathrooms"
                        value={accessData.bathrooms}
                        onChange={handleOnChange}

                    />
                    <Form.Group className="form_switch" >
                    <Form.Check 
                        type="switch"
                        id="fee-switch"
                        label="Is there a fee to come here?"
                        name="fee"
                        value={accessData.fee}
                        onChange={handleOnChange}
                        style={{"margin-bottom": "10px"}}
                    />
                    </Form.Group>
                    </Form.Group>
                    <Button variant="access-form-submit" type="submit" >
                        Add New Access Point
                    </Button>
                </Form> 
                </div>
                </div>
            </div>
            </> : <h1>Please Login or Register before creating a New Access Point!</h1>}
            <FooterNav />
        </div>
    )
}

export default NewAccess