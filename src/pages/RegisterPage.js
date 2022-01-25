import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerRequest } from "../redux/authRedux"
import Swal from 'sweetalert2'
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: whitesmoke;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Error = styled.span`
    color: red;
`

function RegisterPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const { isFetching, currentUser, error } = useSelector(state => state.user)

    function checkPassword() {
        if (password !== confirmPassword) {
            Swal.fire('Error', "Passwords don't match", 'error')
            return false
        } else if (password.length < 5) {
            Swal.fire('Error', "Password must be longer than 4 characters", 'error')
            return false
        }
        return true
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (checkPassword()) {
            registerRequest(dispatch, {username, password, email})
        }
    }

    useEffect(() => currentUser && navigate("/"), [currentUser, navigate])

    return (
        <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" required/>
                <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" required />
                <Input placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} type="password" required/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance to the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="submit" disabled={isFetching || currentUser}>REGISTER</Button>
                {error && <Error>Something went wrong...</Error>}
            </Form>
        </Wrapper>
        </Container>
    )
}

export default RegisterPage;