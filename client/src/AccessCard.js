import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function AccessCard (access_point){
    let navigate = useNavigate();

    function handleCardClick(id) {
      navigate(`/access/${id}`);
      console.log(id)
    }

    function displayStars() {
        const totalRatings = access_point.access_point.water_access_ratings.map(rating => rating.rating)
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

    return (
        <>
        <Card style={{ width: '25rem', height: '32rem', padding: "10px", "margin-left": "30px", "margin-right": "30px"}}>
            <Card.Img style={{"object-fit": "cover", height: '15rem'}} id="card_image" onClick={function(){handleCardClick(access_point.access_point.id)}} variant="top" src={access_point.access_point.water_access_images.length ? access_point.access_point.water_access_images[0].image_url : "https://upload.wikimedia.org/wikipedia/commons/1/14/Ireland-AtlanticOceanwithAranIsland.jpg"} />
                <Card.Body>
                <div style={{"text-align": "center", "margin-top": "-15px"}}>{displayStars()}</div>
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