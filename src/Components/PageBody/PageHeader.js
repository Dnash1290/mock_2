import "./PageHeader.css"
import personIcon from "../Images/Icons/accessibility.png"


export default function PageHeader() {
    return (
        <div id="PageHeader">
            <h1><a href="/"> LOGO</a></h1>
            <div>             
                <a href="/register">Register</a>
                <a id="login-button" href="/login">Login</a>
                <img id="header-icon" src={personIcon}/>
            </div>

        </div>
    )
}
