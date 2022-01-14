import styled from "styled-components"
import { popularProducts } from "../Data"
import ProductItem from "./ProductItem"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`

function Products() {
    return (
        <Container>
            {popularProducts.map((item) => (
                <ProductItem key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default Products
