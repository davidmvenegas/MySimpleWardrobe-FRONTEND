import styled from "styled-components"
import { categories } from "../../Data"
import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    padding: 50px;
    ${mobile({ padding: "0px", flexDirection:"column" })}
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
