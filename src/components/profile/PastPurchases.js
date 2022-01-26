import './pastpurchases.css'
import { useSelector } from 'react-redux'

function PastPurchases() {
    const orders = useSelector((state) => state.orders.orders)

    console.log(orders)
    return (
    <div>
        Past Purchases
    </div>
    )
}

export default PastPurchases
