import "./Home.css"
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home(){
    const [searchLocation, setSearchLocation] = useState("");
    const navigate = useNavigate()

    function search_helper(){
        const cityName = searchLocation
        const limit = 3
        const apiKey = "16498a6b6652ecfa4fe8007afa19e506"
        const ENDPOINT = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;
        

        axios.get(ENDPOINT)
        .then(response => {
            const data = JSON.stringify(response.data, null, 2)
            localStorage.setItem("weather_data",data)
        })

    }

    function search(event){
        alert("dafasfasfa")
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
                <button type="submit">X</button>
            </form>
        </div>
    );
}