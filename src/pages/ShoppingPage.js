import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Shopping from "../components/shopping/Shopping"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px 20px 0;
    font-size: 2.5rem;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px 20px 5px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option``;

function ShoppingPage() {
    useEffect(() => window.scrollTo(0, 0))
    const location = useLocation()
    const category = location.pathname.split("/").at(-1)
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    function handleFilters(e){
        setFilters({...filters, [e.target.name]: e.target.value})
    }
    return (
        <Container>
        <Navbar />
        <Menu/>
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
                <Option disabled selected hidden>Color</Option>
                <Option>White</Option>
                <Option name="000">Black</Option>
                <Option name="888">Gray</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
                <Option disabled selected hidden>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e => setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="low">Price (Low)</Option>
                <Option value="high">Price (High)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Shopping category={category} filters={filters} sort={sort} />
        <Footer />
        </Container>
    )
}

export default ShoppingPage;