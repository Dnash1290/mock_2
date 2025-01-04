import "./PageFooter.css"
import ytIcon from "../Images/Icons/soical_media/youtuble logo_icon.png"
import twitterIcon from "../Images/Icons/soical_media/twitter logo_icon.png"
import tiktokIcon from "../Images/Icons/soical_media/tiktok_icon.png"
import instaIcon from "../Images/Icons/soical_media/instagram logo_icon.png"
import facekbookIcon from "../Images/Icons/soical_media/facebook logo_social network_icon.png"

export default function PageFooter(){
    return(
   
        <div id="footer-page" >
            <div id="footer-title">
                <div>Health Advice</div>
                <div>Group</div>
            </div>
            <div id="social-medias">
                <a href="#"><img src={ytIcon}/></a>
                <a href="#"><img src={twitterIcon}/></a>
                <a href="#"><img src={tiktokIcon}/></a>
                <a href="#"><img src={instaIcon}/></a>
                <a href="#"><img src={facekbookIcon}/></a>
            </div>
            <div id="contacts">
                Contacts
                <div>07346 54634</div>
                <div>HealthGroup@gmail.com</div>
                <div>About Us</div>
            </div>
        </div>

    )
}