import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/cartRedux"
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { generalRequest } from "../request"
import { mobile } from "../responsive"

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(i) => i.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`
function ProductPage() {
    useEffect(() => window.scrollTo(0, 0))
    const dispatch = useDispatch()
    const location = useLocation()
    const productID = location.pathname.split("/").at(-1)
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await generalRequest.get(`products/${productID}`)
                const selectedColor = await response.data.color.at(0).toString()
                const selectedSize = await response.data.size.at(0).toString()
                setColor(selectedColor)
                setSize(selectedSize)
                setProduct(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getProduct()
    }, [productID])

    const handleQuantity = (input) => (input === "remove" ? quantity > 1 && setQuantity(quantity - 1) : setQuantity(quantity + 1))
    const handleAddToCart = () => (dispatch(addProduct({...product, quantity, color, size})))

    return (
        <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
            <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
                <Filter>
                <FilterTitle>Color</FilterTitle>
                    {product.color?.map((colorItem) => (
                        <FilterColor key={colorItem} color={colorItem} onClick={()=>setColor(colorItem)} style={color === colorItem ? {border: "3px solid #888"} : null} />
                    ))}
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e)=>setSize(e.target.value)}>
                    {product.size?.map((sizeItem) => (
                        <FilterSizeOption key={sizeItem}>{sizeItem}</FilterSizeOption>
                    ))}
                </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                <Remove onClick={()=>handleQuantity("remove")} />
                <Amount>{quantity}</Amount>
                <Add onClick={()=>handleQuantity("add")}/>
                </AmountContainer>
                <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
        </Container>
    )
}

export default ProductPage;