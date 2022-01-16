import styled from 'styled-components'
import { mobile } from "../responsive";


function Announcement() {
    const Container = styled.div`
        height: 35px;
        background-color: teal;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        ${mobile({ margin: "2.5px 0 6.5px" })}
    `
    return (
        <Container>Free Shipping on Orders Over $50</Container>
    )
}

export default Announcement
