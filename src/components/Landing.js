import './landing.css'
import { useNavigate } from 'react-router-dom'
import landingImage from '../images/landing.png'

function Landing() {
    const navigate = useNavigate()
    return (
        <div className="landingContainer">
            <div className="landingWrapper">
                <div className="landingImgWrapper">
                    <img className="landingMarsImg" src={landingImage} alt="landing" />
                </div>
                <div className="landingTextbox">
                    <h1>Dress to Impress.</h1>
                    <p>Your one-stop shop for all clothing needs.</p>
                    <div className="landingButtonBox">
                        <button className="landingButton"><span className="landingButtonSpan"></span>Mens</button>
                        <button onClick={() => navigate(`/products/womens`)} className="landingButton"><span className="landingButtonSpan"></span>Womens</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
