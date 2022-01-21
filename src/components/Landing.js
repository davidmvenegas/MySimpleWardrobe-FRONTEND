import './landing.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BtnSlider from './BtnSlider'
import { dataSlider } from '../LandingData'

function Landing() {
    const navigate = useNavigate()
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => setSlideIndex(index)
    return (
        <div className="landingContainer">
            <div className="landingWrapper">
                <div className="sliderContainerWrapper">
                    <div id='sliderMain' className="container-slider">
                        {dataSlider.map((obj, index) => {
                            return (
                                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                    <button id='sliderButtonHome' onClick={() => navigate(`/products/${obj.category}`)}>{obj.title}</button>
                                    <img src={obj.img} alt='pic' />
                                </div>
                            )
                        })}
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                        <div id='containerDots' className="container-dots">
                            {Array.from({length: 5}).map((item, index) => (
                                <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
