import hero from '../assets/hero.jpg'
import email from '../assets/Email.png'
import linked from '../assets/Linked In.png'

function MainInfo() {
    return (
        <main className="info-container">
            <img src={hero} alt="hero"/>
            <div className="details">
                <h1>Laura Smith</h1>
                <h2>Front End Developer</h2>
                <p>laurasmith.website</p>
            </div>
            <div className="btns-container">
                <button>
                    <img src={email} alt="email"/>
                    <span>Email</span>
                </button>
                <button>
                    <img src={linked} alt="linked-in"/>
                    <span>LinkedIn</span>
                </button>
            </div>
        </main>
    )
}

export default MainInfo