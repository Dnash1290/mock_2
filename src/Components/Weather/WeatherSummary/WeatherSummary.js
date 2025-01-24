import "./Weatherhighlight.css"
import tempIcon from "../../Images/Icons/thermometer.png"


export default function WeatherSummary({api_data}){
    const temperture = api_data.main?.temp || 0
    const feel_temperture = api_data.main?.feels_like || ""
    const location = api_data["name"]
    const country = api_data.sys?.country || ""
    
    if (!api_data){return(<div>Loading....</div>)}

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
            <div className="temp-text">{location},{country}</div>
            <div className="temp-text">{api_data["weather"][0]["description"]}</div>
            </div>
        </div>
    )
}