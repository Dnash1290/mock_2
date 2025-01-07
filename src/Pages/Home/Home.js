import "./Home.css"
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [searchLocation, setSearchLocation] = useState("");
    const navigate = useNavigate()


    function search(event){
        alert("dafasfasfa")
        event.preventDefault()
        const link = "/search?q=" + searchLocation;
        navigate(link)
    }


    return(
        <div id="home-search">
            <form className="search-form" onSubmit={(e) => search(e)}>
                <input
                    type="text"
                    placeholder="Location.. E.g London"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button type="submit">X</button>
            </form>
        </div>
    );
}