import styled from "styled-components"
import { Send } from "@material-ui/icons"

const Container = styled.div``
const Title = styled.h1``
const Description = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``

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
