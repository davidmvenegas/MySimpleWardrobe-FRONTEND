import './landing.css'
import MarsImage from '../images/mars.png'

function Landing() {
    return (
        <div className="landingContainer">
            <div className="landingWrapper">
                <div className="landingImgWrapper">
                    <img className="landingMarsImg" src={MarsImage} alt="MARS" />
                </div>
                <div className="landingTextbox">
                    <h1>Adventure Awaits.</h1>
                    <p>The one-stop shop for all your Space needs.</p>
                    <div className="landingButtonBox">
                        <button className="landingButton"><span className="landingButtonSpan"></span>Shop</button>
                        <button className="landingButton"><span className="landingButtonSpan"></span>About</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
