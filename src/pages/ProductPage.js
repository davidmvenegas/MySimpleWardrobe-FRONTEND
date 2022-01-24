import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/cartRedux"
import { Add, Remove, ArrowBack } from "@material-ui/icons"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import { generalRequest } from "../request"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    position: relative;
    padding: 0 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
    flex: 5;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
    flex: 4;
    padding: 75px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
    font-size: 3rem;
`
const Desc = styled.p`
    margin: 20px 0px 22.5px;
    font-size: 1.25rem;
    font-weight: 200;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 45px;
`
const FilterContainer = styled.div`
    width: fit-content;
    margin: 25px 0 32.5px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
`
const FilterTitle = styled.span`
    font-size: 22.5px;
    font-weight: 200;
    margin-right: .25rem;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${(i) => i.color};
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
    width: 8rem;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`
const AbsoluteBack = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    height: 3rem;
    width: 5rem;
    background-color: transparent;
    border: none;
    outline: none;
`
function ProductPage() {
    const navigate = useNavigate()
    useEffect(() => window.scrollTo(0, 0))
    const dispatch = useDispatch()
    const location = useLocation()
    const productID = location.pathname.split("/").at(-1)
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [inCart, setInCart] = useState(false)

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

    const handleQuantity = (input) => {
        input === "remove" ? quantity > 1 && setQuantity(quantity - 1) : setQuantity(quantity + 1)
        setInCart(false)
    }
    function handleColor(colorItem) {
        setColor(colorItem)
        setQuantity(1)
        setInCart(false)
    }
    function handleSize(e) {
        setSize(e.target.value)
        setQuantity(1)
        setInCart(false)
    }
    function handleAddToCart() {
        dispatch(addProduct({...product, quantity, color, size}))
        setInCart(true)
    }

    const productColors = product.color?.slice(0, -1)

    console.log(product)
    return (
        <Container>
        <Navbar />
        <Menu/>
        <Wrapper>
            <AbsoluteBack><ArrowBack style={{cursor: "pointer", fontSize: "2.5rem"}} onClick={() => navigate(-1)}/></AbsoluteBack>
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
                    {productColors?.map((colorItem) => (
                        <FilterColor key={colorItem} color={colorItem} onClick={() => handleColor(colorItem)} style={color === colorItem ? {border: "3px solid #888"} : null} />
                    ))}
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => handleSize(e)}>
                    {product.size?.map((sizeItem) => (
                        <FilterSizeOption key={sizeItem}>{sizeItem}</FilterSizeOption>
                    ))}
                </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                <Remove style={{cursor: "pointer"}} onClick={()=>handleQuantity("remove")} />
                <Amount>{quantity}</Amount>
                <Add style={{cursor: "pointer"}} onClick={()=>handleQuantity("add")}/>
                </AmountContainer>
                <Button onClick={handleAddToCart}>{inCart ? "ADDED!" : "ADD TO CART"}</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer />
        </Container>
    )
}

export default ProductPage;