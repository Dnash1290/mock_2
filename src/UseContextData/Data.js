import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Context = createContext()

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