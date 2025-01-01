import "./Weatherhighlight.css"
import tempIcon from "../../Components/Images/Icons/thermometer.png"


export default function WeatherSummary(){
    return(
        <div id="weather-summary">
        <div>
            <div className="temp-icon"><img src={tempIcon} /></div>
            
        </div>
        <div>Location</div>
        </div>
    )
}