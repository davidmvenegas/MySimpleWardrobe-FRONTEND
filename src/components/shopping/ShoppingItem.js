import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { FavoriteBorderOutlined, ShoppingCartOutlined } from "@material-ui/icons"

const Image = styled.img`
    height: 75%;
`
const Info = styled.div`
    opacity: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all .3s ease;
    cursor: pointer;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    transition: all .3s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.085);
        cursor: pointer;
    }
`
const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 900;
    color: white;
    -webkit-text-stroke: 1px black;
    margin-bottom: 2rem;
    text-align: center;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    min-width: 280px;
    background-color: #f5fbfd;
    flex: 1;
    margin: 5px;
    &:hover ${Info} {
        opacity: 1;
    }
`

function ProductPage({item}) {
    const navigate = useNavigate()
    return (
        <Container>
            <Image src={item.img}/>
            <Info onClick={() => navigate(`/product/${item._id}`)}>
                <Title>{item.title}</Title>
                <IconContainer>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </IconContainer>
            </Info>
        </Container>
    )
}

export default ProductPage
