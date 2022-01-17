import { useState } from "react";
import { sliderItems } from "../Data";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${i=>i.direction === "left" && "10px"};
    right: ${i=>i.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: .5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${i=>i.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${i=>i.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {
    const [sldIdx, setSldIdx] = useState(0)
    const handleClick = (direction) => (direction==="left") ? setSldIdx(sldIdx > 0 ? sldIdx-1 : 2) : setSldIdx(sldIdx < 2 ? sldIdx+1 : 0)

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}><ArrowLeftOutlined/></Arrow>
                <Wrapper slideIndex={sldIdx}>
                    {sliderItems.map((item) => (
                        <Slide key={item.id} bg={item.bg}>
                            <ImgContainer>
                                <Image src={item.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Button>EXPLORE NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}><ArrowRightOutlined/></Arrow>
        </Container>
    )
}

export default Slider
