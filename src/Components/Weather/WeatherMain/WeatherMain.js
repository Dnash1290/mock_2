import "./WeatherMain.css"
import windIcon from "../../Images/Icons/air_wind.png"

export default function WeatherMain({api_data}){
    const time = api_data["dt_txt"].split(" ")[1].slice(0,2)
    // const temp = Math.round(api_data["main"]["temp"])
    const temp = Math.round( api_data.main?.temp || 0 )
    const weatherIcon = api_data["weather"][0]["icon"]
    const wind = api_data["wind"]["speed"] 
    const windDir = api_data["wind"]["deg"]
    
    if (!api_data){return(<div>Loading....</div>)}

    return(
        <div className="main-weather-container">
        
            <div className="time">{time}</div>
            <div>{temp ||"0"}°C</div>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@4x.png`}/>
            <div>3%</div>
            <img className="wind-dir" style={{rotate:windDir.toString()+"deg"}} src={windIcon}/>
            <div>{wind}</div>
            <div className="km-h">m/s</div>
        </div>
    )
}