import styled from "styled-components"
import { Send } from "@material-ui/icons"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5fc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
    box-sizing: border-box;
`
const Button = styled.button`
    flex: 1;
    color: white;
    background-color: teal;
    border: none;
    cursor: pointer;
    &:active {
        transform: scale(.9);
    }
`

function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get updates about your favorite products</Description>
            <InputContainer>
                <Input/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
