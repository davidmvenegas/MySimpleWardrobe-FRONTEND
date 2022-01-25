import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router"
import { userRequest } from "../request"
import { emptyCart } from '../redux/cartRedux'


const SuccessPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {dispatch(emptyCart())})
    const data = location.state.stripeData
    const cart = location.state.cart
    const currentUser = useSelector((state) => state.user.currentUser)
    const [orderId, setOrderId] = useState(null)

    useEffect(() => {
        async function createOrder() {
            try {
                const response = await userRequest.post("orders", {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                    })
                setOrderId(response.data._id)
            } catch {}
        }
        data && createOrder()
    }, [cart, data, currentUser])

    // console.log(location.state)

    return (
        <div style={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            {orderId ? `Order has been created successfully. Your order number is ${orderId}` : `Successful. Your order is being prepared...`}
            <button style={{ padding: 10, marginTop: 20, cursor: "pointer" }} onClick={()=>navigate("/")}>Go to Homepage</button>
        </div>
    )
}

export default SuccessPage