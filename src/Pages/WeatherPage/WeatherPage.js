import "./WeatherPage.css"
import containerImg from "../../Components/Images/Home_search_banner.jpg"
import WeatherSummary from "../../Components/Weather/WeatherSummary/WeatherSummary"
import WeatherMain from "../../Components/Weather/WeatherMain/WeatherMain"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { ApiContext } from "../../UseContextData/Data"

export default function WeatherPage(){  
    const {CurrentWeather, WeatherForcast} = useContext(ApiContext)

    // find a way to check what the user searched for
    // hint google how to read url query params

    if (!WeatherForcast){
        return(
            <div>Loading data</div>
        )
    }

    let component = []
    for (let i = 0; i < WeatherForcast["list"].length; i++){
        component.push(<WeatherMain api_data={WeatherForcast["list"][i]}/>) 
    }

    return(        
        <div className="weather-background">
            <div className="middle-flex"><a>Weather</a><a>Heatlh</a></div>
            <WeatherSummary api_data={CurrentWeather} />

            <div id="main-weather-flex">
                {component}
                {/* <WeatherMain api_data={WeatherForcast["list"][4]}/> */}
            </div>
       
        </div>

    )    
}