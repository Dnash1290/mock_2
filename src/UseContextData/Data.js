import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const navigate = useNavigate()
export const context = createContext()

export function UserData({children}){
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    function login(userdata){
        localStorage.setItem("user",JSON.stringify(userdata)) // save data in brower
        navigate("/home") //nevigate to there
        setUserData(userdata)
    }

    function logout(userdata){
        localStorage.removeItem("user")
        navigate("/login")
        setUserData(null)
    }

    return(
        <useContext.Provider value={{login, logout, UserData}}>{children}</useContext.Provider>
    )
}