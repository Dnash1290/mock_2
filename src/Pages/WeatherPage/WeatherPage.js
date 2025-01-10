import "./WeatherPage.css"
import containerImg from "../../Components/Images/Home_search_banner.jpg"
import WeatherSummary from "../../Components/Weather/WeatherSummary/WeatherSummary"
import WeatherMain from "../../Components/Weather/WeatherMain/WeatherMain"

export default function WeatherPage(){


    return(
        
        <div className="weather-background">
            <div className="middle-flex"><a>Weather</a><a>Heatlh</a></div>
            <WeatherSummary />
            <div id="main-weather-flex">
                <WeatherMain/>
                <WeatherMain/>
                <WeatherMain/>
                <WeatherMain/>
                <WeatherMain/>
            </div>
        
        </div>

    )    
}