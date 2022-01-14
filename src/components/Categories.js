import styled from "styled-components"
import { categories } from "../Data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
`

function Categories() {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default Categories
