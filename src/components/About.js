import './about.css'
import Sparkle from 'react-sparkle'
import Astronaut from '../images/astronaut.png'

function About() {
    return (
        <div className="aboutContainer">
        <Sparkle color={"white"} count={100} minSize={1} maxSize={3} overflowPx={0} fadeOutSpeed={5} newSparkleOnFadeOut={true} flicker={true} flickerSpeed={'slowest'}/>
            <div className="aboutLeft">
                <h1>ABOUT: <span>The Red Planet Shop</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem nesciunt molestiae corporis quam rem maxime et aliquid iure incidunt, assumenda sit illum a reiciendis soluta veniam est dolorum. Tenetur!</p>
            </div>
            <div className="aboutRight">
                <img src={Astronaut} alt="Astronaut" />
            </div>
        </div>
    )
}

export default About;
