import "./WeatherMain.css"
import weatherIcon from "../../Images/Icons/rainy_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import windIcon from "../../Images/Icons/air_wind.png"

export default function WeatherMain(){
    return(
        <div className="main-weather-container">
            <div className="time">01</div>
            <img src={weatherIcon}/>
            <div>3%</div>
            <img src={windIcon}/>
            <div>12</div>
            <div className="km-h">km/h</div>
        </div>
    )
}