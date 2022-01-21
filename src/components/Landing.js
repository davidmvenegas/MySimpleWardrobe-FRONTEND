import './landing.css'

function Landing() {
    return (
        <div className="landingContainer">
            <div className="landingWrapper">
                <div className="landingImgWrapper">
                    <img className="landingMarsImg" src='' alt="MARS" />
                </div>
                <div className="landingTextbox">
                    <h1>Adventure Awaits.</h1>
                    <p>The one-stop shop for all your Space needs.</p>
                    <div className="landingButtonBox">
                        <button className="landingButton"><span className="landingButtonSpan"></span>Mens</button>
                        <button className="landingButton"><span className="landingButtonSpan"></span>Womens</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
