import NavBar from './NavBar'
import { useContext, useState, useEffect } from "react"
import { appContext } from './App'
import SearchBar from './SearchBar'
import AccessCard from './AccessCard'
import "react-multi-carousel/lib/styles.css";
import FooterNav from './FooterNav';


function Search (){
    const { searchQuery } = useContext(appContext)
    const [searchQueryValue, setSearchQueryValue] = searchQuery;
    const [accesses, setAccesses] = useState([])
    console.log(searchQueryValue)

    useEffect(() => {
        fetch("/water_access_points")
        .then(res => res.json())
        .then(data =>{
            console.log(data[0].name.toLowerCase())
            setAccesses(data)
        })
    }, [])

    const filteredAccesses = accesses.filter((access) => {
        return access.name.toLowerCase().includes(searchQueryValue.toLowerCase()) || access.town.toLowerCase().includes(searchQueryValue.toLowerCase()) || access.access_type.toLowerCase().includes(searchQueryValue.toLowerCase())
    })

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

    return (
        <div>
            <NavBar />
            <div id='searchPageDiv'>
                <SearchBar />

            </div>
            <div id='searchResults'>
                {filteredAccesses ? filteredAccesses.map(access_point => <AccessCard className="accessCard" access_point={access_point} />) : null}
            </div>
            <FooterNav />
        </div>
    )
}

export default Search