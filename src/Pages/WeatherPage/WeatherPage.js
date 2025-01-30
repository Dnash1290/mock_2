import "./WeatherPage.css"
import containerImg from "../../Components/Images/Home_search_banner.jpg"
import WeatherSummary from "../../Components/Weather/WeatherSummary/WeatherSummary"
import WeatherMain from "../../Components/Weather/WeatherMain/WeatherMain"
import { useState, useEffect } from "react"
import axios from "axios"
import { useContext } from "react"
import { ApiContext } from "../../UseContextData/Data"
import { useSearchParams } from "react-router-dom";


export default function WeatherPage(){  
    const {CurrentWeather, locationWeather, WeatherForcast, set_location_weather,current_weather, apiKey} = useContext(ApiContext)
    const [isLoading, setIsLoading] = useState(true)

    const [searchParams, setSearchParams] = useSearchParams()
    const location = searchParams.get("location");
    // const {set_location_weather,current_weather, apiKey, } = useContext(ApiContext)
    // find a way to check what the user searched for
    // hint google how to read url query params

    useEffect(() => {
// sir new problem the  isloading function is not updating
        const limit = 3

        const ENDPOINT = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${apiKey}`; 
        axios.get(ENDPOINT)
        .then(response => {
            set_location_weather(response.data)
            current_weather(response.data)
            // // navigate(`/search/weatherpage?location=${searchLocation}`)
            setIsLoading(false)
            // console.log("Set to false")
            // console.log(isLoading)
            
            
        })
        .catch(error => {
            // setIsLoading(false);
            console.log(error?.response?.data?.message)
        })
    }, [location])


    if (isLoading){
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