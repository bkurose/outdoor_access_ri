import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function AccessCard (access_point){
    let navigate = useNavigate();

    function handleCardClick(id) {
      navigate(`access/${id}`);
      console.log(id)
    }

    return (
        <>
        <Card style={{ width: '25rem' }}>
            <Card.Img id="card_image" onClick={function(){handleCardClick(access_point.access_point.id)}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Ireland-AtlanticOceanwithAranIsland.jpg" />
                <Card.Body>
                <Card.Title>{access_point.access_point.name}</Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>
                    {access_point.access_point.town}
                </Card.Text>
                <Card.Text>
                    {access_point.access_point.description}
                </Card.Text>
            </Card.Body>
        </Card>

        </>
    )
}

export default AccessCard