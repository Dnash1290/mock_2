import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AirPolComponent from "../Components/Health/AirPolComponent";


export const Context = createContext()
export const ApiContext = createContext()

export function UserData({children}){
    const navigate = useNavigate()
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    function login(userdata){
        localStorage.setItem("user",JSON.stringify(userdata)) // save data in brower
        setUserData(userdata)
        navigate("/home") //nevigate to there
    }

    function logout(){
        localStorage.removeItem("user")
        navigate("/login")
        setUserData(null)
    }

    return(
        <Context.Provider value={{ login, logout, userData}}>{children}</Context.Provider>
    )
}

export function Api_Data({children}){

    const apiKey = "16498a6b6652ecfa4fe8007afa19e506"

    const [locationWeather, setLocationWeather] = useState(
        JSON.parse(localStorage.getItem("location_weather"))|| null
    )
    const [CurrentWeather, setCurrentWeather] = useState(
        JSON.parse(localStorage.getItem("current_weather"))|| null
    )
    const [WeatherForcast, setWeatherForcast] = useState(
        JSON.parse(localStorage.getItem("weather_forcast")) || null
    )
    let CurrentAirPollution = null

    function set_location_weather(api_data){
        localStorage.setItem("location_weather",JSON.stringify(api_data))
        setLocationWeather(api_data)
    }

 
    let lon = ""
    let lat = "" 
    
    function weather_forcast(){
    
        const ENDPOINT = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        axios.get(ENDPOINT)
        .then(respone => {
            setWeatherForcast(respone.data)
            localStorage.setItem("weather_forcast",JSON.stringify(respone.data))
            console.log("weather forcast",WeatherForcast)
            console.log("location", locationWeather)
        })
        .catch(error => console.log(error))
    }

    function current_weather(cod){
     
        lat = cod[0]["lat"]
        lon = cod[0]["lon"]
        console.log("current weather before api call",CurrentWeather)

        const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        
        axios.get(ENDPOINT)
        .then(response => {
            console.log("RUNNING SET CURRENT WEATHER REEE")
            setCurrentWeather(response.data)
            localStorage.setItem("current_weather",JSON.stringify(response.data))
            console.log("current weather",CurrentWeather)
            
        })
        .catch(error => console.log(error))
        weather_forcast()
    }

    function current_air_pollution(){
        const ENDPOINT = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        axios.get(ENDPOINT)
        .then(response => {
            CurrentAirPollution = response.data
            console.log(CurrentAirPollution)
        })
    }

    return(<ApiContext.Provider value={
        {locationWeather, set_location_weather, current_weather,
        CurrentWeather, apiKey, weather_forcast, WeatherForcast,
        current_air_pollution, CurrentAirPollution
    }
    } >{children}</ApiContext.Provider>)
}