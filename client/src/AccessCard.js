import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AccessCard (access_point){

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Ireland-AtlanticOceanwithAranIsland.jpg" />
                <Card.Body>
                <Card.Title>{access_point.access_point.name}</Card.Title>
                <Card.Text>
                    {access_point.access_point.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        </>
    )
}

export default AccessCard