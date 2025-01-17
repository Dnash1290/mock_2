import "./Weatherhighlight.css"
import tempIcon from "../../Images/Icons/thermometer.png"


export default function WeatherSummary({api_data}){
    const temperture = api_data["list"][0][]

    const feel_temperture = 2
    const location = api_data["city"]["name"]
    
    return(
        <div id="weather-summary">
        <div id="weather-left-container">
            <div className="temp-icon"><img src={tempIcon} /></div>
            <div id="weather-summary-container">
                <div className="temp-text">Weather</div>
                <div className="temp-text-main">{temperture}°C</div>
                <div className="temp-text">Feels like {feel_temperture}°C</div>
                
            </div>
        </div>

        <div id="weather-right-container">
            <div>Location</div>
            <div className="temp-text">{location}</div>
            <div className="temp-text">Other information</div>
            </div>
        </div>
    )
}