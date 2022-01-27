import './successpage.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router"
import { generalRequest } from "../request"
import { emptyCart } from '../redux/cartRedux'

const SuccessPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = location.state?.responseData
    const cart = location.state?.cart
    const currentUser = useSelector((state) => state.user.currentUser)
    
    if (window.history.replaceState) window.history.replaceState(null, null, window.location.href)
    useEffect(() => !data && navigate("/"), [data, navigate])
    useEffect(() => data && dispatch(emptyCart()), [data, dispatch])
    
    useEffect(() => {
        async function createOrder() {
            try {
                await generalRequest.post("orders", {
                    userId: (currentUser?._id || "GUEST"),
                    amount: cart.total,
                    address: data.billing_details.address,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                })
            } catch(error) {
                console.error(error)
            }
        }
        data && createOrder()
    }, [cart, data, currentUser, navigate])

    console.log(data)
    console.log(cart)

    // {currentUser ? `Thanks for being a customer, ${currentUser.username}` : `Guest Checkout`}

    const quantity = cart.quantity
    const total = cart.total
    const products = cart.products
    const receipt = data.receipt_url

    return (
        <div id='successContainer'>
            <div id="sTitle">
                <h1>Thank You{currentUser ? <span> {currentUser.username}</span> : ""}</h1>
                <p><b>My Simple Wardrobe</b> thanks you for being a valued customer</p>
                <h6>Click <a target="_blank" href={receipt} rel="noreferrer">here</a> to view your Receipt</h6>
            </div>
            <div className="sProducts">
                <h1>Items Ordered: ({quantity})</h1>
                {products.map((product) => (
                <div className="sProductItem">
                    <img id='sNameI' src={product.img} alt="Product" />
                    <h1 id='sNamePT'>{product.title}</h1>
                    <h1 id='sNameP'>{product.size}</h1>
                    <span id='sNameC' style={{backgroundColor: `#${product.color}`}}></span>
                    <p id='sNamePr'>{product.price}<span>$</span> x {product.quantity}</p>
                </div>))}
            </div>
            <div className="sAddress">
                <div className="sAddressBox">
                    <p>Staten Island, NY <br /> 216 Daniel Low Terrace <br /> 10301 - United States</p>
                </div>
                <div className="sTotal">
                    <h4>Customer: <span>&nbsp; David Venegas</span></h4>
                    <h4>Order Total: <span>&nbsp; {total}.00 USD</span></h4>
                </div>
            </div>
            <button id='successHomeBtn' onClick={()=>navigate("/")}>Return to Homepage</button>
        </div>
    )
}

export default SuccessPage