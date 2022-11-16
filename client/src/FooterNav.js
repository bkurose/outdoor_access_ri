import { Link } from "react-router-dom";

function FooterNav (){
    return (
        <div id='footer'>
            <div>
            <p></p>
            <a href="https://leafletjs.com/" className="footItem">Created With Leaflet</a> 
            </div>
            <div>
            <p></p>
            <p className="footItem">A Project for the FlatIron School</p>
            <p style={{"margin-top": "-20px"}} className="footItem">By Ben Kurose</p>

            </div>
            <div>
            <p></p>
            <Link className="footItem" to="/legal">Terms and Conditions</Link>
            </div>
        </div>
    )
}

export default FooterNav