import { useEffect, useState } from "react"
import styled from "styled-components"
import ShoppingItem from "./ShoppingItem"
import axios from "axios"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`

function ProductPageItem({category, filters, sort}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products?category=${category}`)
                setProducts(response.data.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))))
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [category, filters])

    useEffect(() => {
        if (sort === "newest") {
            setProducts((items) => [...items].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "high") {
            setProducts((items) => [...items].sort((a, b) => a.price - b.price))
        } else if (sort === "low") {
            setProducts((items) => [...items].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            {products.map((item) => (
                <ShoppingItem key={item._id} item={item}/>
            ))}
        </Container>
    )
}

export default ProductPageItem
