
import "./Auth.css"
import authImg from "../../Components/Images/flower_auth.jpg"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../UseContextData/Data"
import axios from "axios"

export default function Register(){
    const[fname, setFname] = useState("")
    const [surname, setSurname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState ("")
    const [confirmPass, setConfirmPass] = useState("")

    const { login } = useContext(Context);

    function POST_data(){
        if (password !== confirmPass){
            alert("password did not match with the confirm password")
            return
        }
        alert("this function ran")

        const ENDPOINT = "http://127.0.0.1:300"

        const DATA = {
            "name": fname,
            "surname": surname,
            "username": username,
            "password": password
        }

        axios.post(ENDPOINT,DATA)
        .then(response =>{
            login(response.data)
            console.log("i got your data")
        })
        .catch(error =>{
            alert(error?.response?.data?.detail)
        })
    }

    return(
        <div className="background">
            <div id="auth-container">
                <img src={authImg}/>
                <div id="auth">
                    <div className="auth-head">Register</div>
                    <form onSubmit={POST_data}>
                        <div className="auth-input-text">Name
                            <br/>
                        <input
                            className="input-class"
                            type="text"
                            placeholder="Username/ Email"
                            value={fname}
                            onChange={(e)=>setFname(e.target.value)}
                            required
                        />
                        </div>
                        <div className="auth-input-text">Surname
                            <br/>
                        <input
                            className="input-class"
                            type="text"
                            placeholder="text"
                            value={surname}
                            onChange={(e)=>setSurname(e.target.value)}
                            required
                        />
                        </div>
                        <div className="auth-input-text">Username
                            <br/>
                        <input
                            className="input-class"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            required
                        />
                        </div>
                        <div className="auth-input-text">Password
                            <br/>
                        <input
                            className="input-class"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                        </div>
                        <div className="auth-input-text">Confirm Password
                            <br/>
                        <input
                            className="input-class"
                            type="password"
                            placeholder="password"
                            value={confirmPass}
                            onChange={(e)=>setConfirmPass(e.target.value)}
                            required
                            // onInvalid={(e)=>alert("yofgvkliodewsj ")}
                        />
                        </div>
                        
                        <button className="auth-input-button" >Register</button>
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