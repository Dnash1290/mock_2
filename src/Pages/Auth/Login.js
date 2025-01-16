import "./Auth.css"
import authImg from "../../Components/Images/flower_auth.jpg"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../UseContextData/Data"
import axios from "axios"

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState ("")

    const {login} = useContext(Context)

    function fetch_login(event){
        event.preventDefault()
        const ENDPOINT = "http://localhost:8001/auth/login"
        const data = {
            "username":username,
            "password":password
        }
        axios.post(ENDPOINT,data)
        .then(response => {
            login(response.data)
            alert("you have log in")
        })
        .catch(response =>{
            
            alert(response.Error);
        })
    } 

    return(
        <div className="background">
            <div className="container">
                <img src={authImg}/>
                <div id="auth">
                    <div className="auth-head-text">Log in</div>
                    <form onSubmit={fetch_login}>
                        <div className="auth-input-text">Username
                            <br/>
                        <input
                            className="input-class"
                            type="text"
                            placeholder="Username/ Email"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                        </div>
                        <div className="auth-input-text">Password
                            <br/>
                        <input
                            className="input-class"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        </div>
                        <button className="auth-input-button" type="Submit">Login</button>
                    </form>
                    <div id="auth-nav-links">
                        <a href="/" className="auth-nav">Forgot Password?</a>
                        <a href="/register"  className="auth-nav">New to our website?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}