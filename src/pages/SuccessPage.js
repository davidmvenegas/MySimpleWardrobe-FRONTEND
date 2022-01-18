import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import { userRequest } from "../request"

const SuccessPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
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

    return (
        <div style={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            {orderId ? `Order has been created successfully. Your order number is ${orderId}` : `Successfull. Your order is being prepared...`}
            <button style={{ padding: 10, marginTop: 20 }} onClick={()=>navigate("/")}>Go to Homepage</button>
        </div>
    )
}

export default SuccessPage