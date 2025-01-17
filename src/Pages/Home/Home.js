import "./Home.css"
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "../../UseContextData/Data";
import { useContext } from "react";

export default function Home(){
    const [searchLocation, setSearchLocation] = useState("");
    const navigate = useNavigate()
    const {set_location_weather,current_weather, apiKey, } = useContext(ApiContext)
    
    function search_helper(){
        const cityName = searchLocation
        const limit = 3
        
        const ENDPOINT = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`; 
        axios.get(ENDPOINT)
        .then(response => {
            set_location_weather(response.data)
            current_weather()
            navigate(`/search/weatherpage?${searchLocation}`)
          
        })
        .catch(error => {
            console.log(error?.response?.data?.message)
        })

    }

    function search(event){
    
        event.preventDefault()
        //const link = "/search?q=" + searchLocation;
        //navigate(link)
        search_helper()
    }


    return(
        <div id="home-search">
            <form className="search-form" onSubmit={(e) => search(e)}>
                <input
                    type="text"
                    placeholder="Location.. E.g London"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button type="submit"></button>
            </form>
        </div>
    );
}