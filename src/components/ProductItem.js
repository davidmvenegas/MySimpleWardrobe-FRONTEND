import styled from "styled-components"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"

const Image = styled.img`
    height: 75%;
`
const Info = styled.div`
    opacity: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all .3s ease;
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

function ProductItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem
