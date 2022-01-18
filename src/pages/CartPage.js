import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { userRequest } from '../request' 
import StripeCheckout from "react-stripe-checkout"
const KEY = process.env.REACT_APP_STRIPE_KEY

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(i) => i.type === "filled" && "none"};
    background-color: ${(i) => i.type === "filled" ? "black" : "transparent"};
    color: ${(i) => i.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(i) => i.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin-bottom: 15px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(i) => i.type === "total" && "500"};
    font-size: ${(i) => i.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

function CartPage() {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)

    useEffect(() => {
        async function makeRequest() {
            try {
                const response = await userRequest.post("checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                })
                console.log(response)
                navigate("/success")
            } catch (error) {
                console.error(error)
            }
        }
        stripeToken && makeRequest()
    }, [cart.total, navigate, stripeToken])

    const setToken = (token) => setStripeToken(token)
    const shippingAmount = cart.total > 0 ? 6.99 : 0
    const totalAmount = cart.total >= 50 ? parseInt(cart.total) : (cart.total + shippingAmount).toFixed(2)
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                <Info>
                    {cart.products.map((product) => (
                        <><Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {(product._id).substring(0, 10)}</ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr /></>
                    ))}
                </Info>
                {cart.total > 0 ?
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ {shippingAmount}</SummaryItemPrice>
                    </SummaryItem>
                    {cart.total >= 50 && <SummaryItem>
                        <SummaryItemText>Free Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -6.99</SummaryItemPrice>
                    </SummaryItem>}
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {totalAmount}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="Space"
                        image="https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${totalAmount}`}
                        amount={totalAmount * 100}
                        token={setToken}
                        stripeKey={KEY}
                        >
                        <Button disabled={totalAmount <= 0} >CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary> :
                <p>ADD_START_SEARCHING_HERE</p>}
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default CartPage;