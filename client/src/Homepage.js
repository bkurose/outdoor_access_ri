import { useState, useEffect } from 'react';
import AccessCard from "./AccessCard"
import NavBar from "./NavBar"
import SearchBar from './SearchBar';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Homepage (){    
    const [accesses, setAccesses] = useState([])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    useEffect(() => {
        fetch("/water_access_points")
        .then(res => res.json())
        .then(data =>{
            setAccesses(data)
        })
    }, [])

    const showAccesses = accesses.map((access_point)=> <AccessCard className="accessCard" access_point={access_point} />)
    return (
        <div>
            <NavBar />
            <SearchBar />
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div>{showAccesses[0]}</div>
                <div>{showAccesses[1]}</div>
                <div>{showAccesses[2]}</div>
                <div>{showAccesses[3]}</div>
                <div>{showAccesses[4]}</div>
                <div>{showAccesses[5]}</div>
                <div>{showAccesses[6]}</div>
                <div>{showAccesses[7]}</div>
                <div>{showAccesses[8]}</div>
            </Carousel>;
        </div>
    )
}

export default Homepage