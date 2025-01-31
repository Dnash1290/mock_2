import "./HealthPage.css"
import WeatherSummary from "../../Components/Weather/WeatherSummary/WeatherSummary"
import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../../UseContextData/Data"
import { NavLink } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import AirPolComponent from "../../Components/Health/AirPolComponent"

export default function HealthPage(){
    const [searchPar, setSearchPar] = useSearchParams()
    let location = searchPar.get("location")
    const {CurrentWeather,current_air_pollution } = useContext(ApiContext)
    const [isLoading, setIsLoading] = useState(true)
    const [CurrentAirPollution, setCurrentAirPollution] = useState(null);

    useEffect(
        () =>{
            current_air_pollution().then(pollutionData => {
                setCurrentAirPollution(pollutionData)
                setIsLoading(false)
            })
        }
    ,[])

    if (isLoading){return (<div>data Loading...</div>)}
    
    
    let pollutions = CurrentAirPollution.list[0].components
    let components = []
    console.log(pollutions)

    for (let partical in pollutions){
        
        components.push( <AirPolComponent partical={partical} num={pollutions[partical]} />)
    }
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
                <div className="circle-container">
                    {components}
                   
                </div>
            </div>
        </div>
    )
}