import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import {Routes, Route} from "react-router-dom"
import HealthPage from "./Pages/HealthPage/HealthPage";

export default function Pages(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/search/weatherpage" element={<WeatherPage/>}/>
                <Route path="/search/healthpage" element={<HealthPage/>}/>
            </Routes>
        </div>
    )
}
