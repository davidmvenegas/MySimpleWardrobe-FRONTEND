import styled from "styled-components"
import { popularProducts } from "../Data"
import PopularProductItem from "./PopularProductItem"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`

function PopularProducts() {
    return (
        <Container>
            {popularProducts.map((item) => (
                <PopularProductItem key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default PopularProducts
