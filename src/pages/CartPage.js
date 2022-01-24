import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Add, Remove } from "@material-ui/icons"
import LogoImg from '../images/logo.png'
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { userRequest } from '../request' 
import { removeAllProduct, removeProduct, addCartProduct } from '../redux/cartRedux'
import Swal from 'sweetalert2'
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
    margin-left: -30px;
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
    width: 74vw;
    min-height: 25rem;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex: 4;
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
    background-color: #${(i) => i.color};
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
    margin-top: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    height: 2.085rem;
    width: auto;
    padding: 0 .5rem;
    border-radius: .5rem;
    text-align: center;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
    background-color: #ddd;
    border: none;
    height: 1px;
    margin-bottom: 15px;
`
const Summary = styled.div`
    flex: 1;
    position: fixed;
    right: 2.25rem;
    margin-top: .5rem;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px 30px;
    max-height: 43vh;
    background-color: white;
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
    cursor: pointer;
`
const RemoveButton = styled.h3`
    font-size: .9rem;
    font-weight: 300;
    border-bottom: 1px solid black;
    margin-top: 1.35rem;
    &:hover {
        cursor: pointer;
    }
`
const ReminderContainer = styled.div`
    height: 25rem;
    width: 100%;
    display: grid;
    place-content: center;
    margin-left: -75vw;
    margin-top: .5rem;
    border-top: 1px solid lightgray;
`
const ReminderContent = styled.h1`
    font-size: 1.5rem;
    font-weight: 200;
    color: #444;
`

function CartPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)

    function handleRemoveAllProduct(product) {
        const price = product.price
        const quantity = product.quantity
        dispatch(removeAllProduct({product, price, quantity}))
    }
    function handleAddProduct(product) {
        const price = product.price
        dispatch(addCartProduct({product, price}))
    }
    function handleRemoveProduct(product) {
        const price = product.price
        if (product.quantity === 1) {
            handleRemoveAllProduct(product)
        } else {
            dispatch(removeProduct({product, price}))
        }
    }

    useEffect(() => {
        async function makeRequest() {
            try {
                const response = await userRequest.post("checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                })
                const responseData = response.data
                const cartState = {responseData, cart}
                navigate("/success", {state: cartState})
            } catch (error) {
                console.error(error)
            }
        }
        stripeToken && makeRequest()
    }, [cart, cart.total, dispatch, navigate, stripeToken])

    const setToken = (token) => setStripeToken(token)
    const shippingAmount = cart.total > 0 ? 6.99 : 0
    const totalAmount = cart.total >= 50 ? parseInt(cart.total) : (cart.total + shippingAmount).toFixed(2)

    function handleBuy() {
        Swal.fire({
            title: 'Hey there!',
            text: "While this checkout process is PCI compliance and your information secure, the website is for demo purposes only. Feel free to use 4242 4242 4242 4242 as a burner card to enjoy the experience.",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Got it!'
        }).then((result) => {if (result.isConfirmed) {
            document.getElementById("stripeButton").click()
            }
        })
    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton onClick={() => navigate(-1)}>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton disabled={totalAmount <= 0} type="filled" onClick={() => handleBuy()}>CHECKOUT NOW</TopButton>
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
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                <ProductAmountContainer>
                                    <Remove style={{cursor:"pointer"}} onClick={() => handleRemoveProduct(product)}/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add style={{cursor:"pointer"}} onClick={() => handleAddProduct(product)}/>
                                </ProductAmountContainer>
                                <RemoveButton onClick={() => handleRemoveAllProduct(product)}>Remove</RemoveButton>
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
                    <Button disabled={totalAmount <= 0} onClick={() => handleBuy()}>CHECKOUT NOW</Button>
                    <StripeCheckout
                        name="My Simple Wardrobe"
                        image={LogoImg}
                        billingAddress
                        shippingAddress
                        description={`Your total is $${totalAmount}`}
                        amount={totalAmount * 100}
                        token={setToken}
                        stripeKey={KEY}
                        >
                        <button id='stripeButton' style={{display: "none", pointerEvents: "none", opacity: "0"}}></button>
                    </StripeCheckout>
                </Summary> :
                <ReminderContainer>
                    <ReminderContent>Bag is Empty</ReminderContent>
                </ReminderContainer>}
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default CartPage;