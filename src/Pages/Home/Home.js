import "./Home.css"
import { useState } from "react";


export default function Home(){
    const [searchLocation, setSearchLocation] = useState("");

    return(
        <div id="home-search">
            <form className="search-form">
                <input
                    type="text"
                    placeholder="Location.. E.g London"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button type="submit" onClick={
                    () => alert(searchLocation)
                }> 
                    
                </button>
            </form>
        </div>
    );
}