import "./WeatherMain.css"
import windIcon from "../../Images/Icons/air_wind.png"

export default function WeatherMain({api_data}){
    const time = api_data["dt_txt"].split(" ")[1].slice(0,2)
    const temp = Math.round(api_data["main"]["temp"])
    const weatherIcon = api_data["weather"][0]["icon"]
    const wind = api_data["wind"]["speed"] 
    
    return(
        <div className="main-weather-container">
        
            <div className="time">{time}</div>
            <div>{temp}°C</div>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@4x.png`}/>
            <div>3%</div>
            <img src={windIcon}/>
            <div>{wind}</div>
            <div className="km-h">m/s</div>
        </div>
    )
}