
import twitter from '../assets/Twitter Icon.png'
import facebook from '../assets/Facebook Icon.png'
import instagram from '../assets/Instagram Icon.png'
import github from '../assets/GitHub Icon.png'

function Social() {
    return (
       <footer className="footer">
            <ul>
                <li><img src={twitter} alt="twitter"/></li>
                <li><img src={facebook} alt="facebook"/></li>
                <li><img src={instagram} alt="instagram"/></li>
                <li><img src={github} alt="github"/></li>
            </ul>
       </footer> 
    )
}

export default Social