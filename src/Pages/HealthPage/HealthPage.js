import "./HealthPage.css"
import WeatherSummary from "../../Components/Weather/WeatherSummary/WeatherSummary"
import { useContext, useEffect } from "react"
import { ApiContext } from "../../UseContextData/Data"
import { NavLink } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export default function HealthPage(){
    const [searchPar, setSearchPar] = useSearchParams()
    let location = searchPar.get("location")
    const {CurrentWeather} = useContext(ApiContext)
    return (
        <div className="weather-background">
            <div className="middle-flex">
                < NavLink className="page-link" to={`/search/weatherpage?location=${location}`}>Weather</ NavLink>
                < NavLink className="page-link" to="/search/healthpage?location=${location}">Heatlh</ NavLink>
            </div>
            <WeatherSummary api_data={CurrentWeather}/>
            <div className="current-health-container">
                <div className="index-level" >Good</div>
                <div className="index-text">index: 1</div>
            </div>
        </div>
    )
}