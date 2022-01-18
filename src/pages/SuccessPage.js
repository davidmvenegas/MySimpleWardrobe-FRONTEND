import { useLocation } from 'react-router-dom'

function SuccessPage() {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>SUCCESS I HAVE YOUR MONEY BITCH BWAHAHAHAHA</h1>
        </div>
    )
}

export default SuccessPage
