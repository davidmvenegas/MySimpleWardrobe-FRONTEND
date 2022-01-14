import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: .5;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.div`
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
    return (
        <Container>
            <Arrow direction="left"><ArrowLeftOutlined/></Arrow>
                <Wrapper>
                    <Slide>
                        <ImgContainer>
                            <Image/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>Lorem ipsum dolor sit.</Title>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo voluptates delectus ipsa beatae est pariatur! Fugiat obcaecati explicabo possimus.</Description>
                            <Button>Start Now</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide>
                        <ImgContainer>
                            <Image/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>Lorem ipsum dolor sit.</Title>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo voluptates delectus ipsa beatae est pariatur! Fugiat obcaecati explicabo possimus.</Description>
                            <Button>Start Now</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide>
                        <ImgContainer>
                            <Image/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>Lorem ipsum dolor sit.</Title>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo voluptates delectus ipsa beatae est pariatur! Fugiat obcaecati explicabo possimus.</Description>
                            <Button>Start Now</Button>
                        </InfoContainer>
                    </Slide>
                </Wrapper>
            <Arrow direction="right"><ArrowRightOutlined/></Arrow>
        </Container>
    )
}

export default Slider
