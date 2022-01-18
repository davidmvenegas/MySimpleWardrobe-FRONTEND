import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    position: relative;
    flex: 1;
    margin: 3px;
    height: 70vh;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
font-weight: 600;
    padding: 10px;
    color: gray;
    background-color: white;
    border: none;
    cursor: pointer;
`

function CategoryItem({item}) {
    const navigate = useNavigate()
    return (
        <Container onClick={() => navigate(`/products/${item.category}`)}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
