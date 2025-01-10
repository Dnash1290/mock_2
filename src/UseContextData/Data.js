import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserContext = createContext()

export function useUser(){
    return  useContext(UserContext)
}

export function UserData({children}){
    const navigate = useNavigate()
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )*

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
        <UserContext.Provider value={{ login, logout, userData}}>{children}</UserContext.Provider>
    )
}