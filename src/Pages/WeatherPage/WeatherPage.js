import "./WeatherPage.css"
import containerImg from "../../Components/Images/Home_search_banner.jpg"
import WeatherSummary from "../../Components/Weather/WeatherSummary/WeatherSummary"
import WeatherMain from "../../Components/Weather/WeatherMain/WeatherMain"
import { useState } from "react"
import axios from "axios"

export default function WeatherPage(){
    const [api_data_location, useApi_data_location] = useState(
        JSON.parse(localStorage.getItem('weather_data'))
    )
    const apiKey = "16498a6b6652ecfa4fe8007afa19e506"
    const lon = api_data_location[0]['lon']
    const lat = api_data_location[0]['lat']
    console.log(api_data_location[0])
    
    const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    axios.get(ENDPOINT)
    .then(response =>{
        const data = JSON.stringify(response.data)
        localStorage.setItem("location_data", data)
    }).catch(response =>{
        alert(response.error?.detail)
    })

    return(        
        <div className="weather-background">
            <div className="middle-flex"><a>Weather</a><a>Heatlh</a></div>
            <WeatherSummary  />
            <div id="main-weather-flex">
                <WeatherMain/>
                <WeatherMain/>
                <WeatherMain/>
                <WeatherMain/>
                <WeatherMain/>
            </div>
       
        </div>

    )    
}