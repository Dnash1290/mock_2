import "./Auth.css"
import authImg from "../../Components/Images/flower_auth.jpg"
import { useState } from "react"

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState ("")

    return(
        <div id="auth-background">
            <div id="auth-container">
                <img src={authImg}/>
                <div id="auth">
                    <div className="auth-head-text">Log in</div>
                    <form>
                        <div className="auth-input-text">Username
                            <br/>
                        <input
                            className="input-class"
                            type="email"
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
                        <button className="auth-input-button" onClick={() =>alert([username, password])}>Login</button>
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