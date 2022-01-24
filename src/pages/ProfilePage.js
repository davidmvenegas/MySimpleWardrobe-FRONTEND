import './profilepage.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AccountSettings from '../components/profile/AccountSettings'
import PastPurchases from '../components/profile/PastPurchases'
import WishList from '../components/profile/WishList'
import { useState } from 'react'

function ProfilePage() {
    const [account, setAccount] = useState(true)
    const [wish, setWish] = useState(false)
    const [orders, setOrders] = useState(false)

    function handleAccount() {
        setAccount(true)
        setWish(false)
        setOrders(false)
    }
    function handleWish() {
        setAccount(false)
        setWish(true)
        setOrders(false)
    }
    function handleOrders() {
        setAccount(false)
        setWish(false)
        setOrders(true)
    }
    return (
    <div>
        <Navbar/>
            <div className='profileContainer'>
                <div className="profileHeader">
                    <h1>Your Profile</h1>
                    <div className="profileHeaderLinks">
                        <p id='sec' className={account ? "secActive" : null} onClick={() => handleAccount()}>Account Settings</p>
                        <p id='sec' className={wish ? "secActive" : null} onClick={() => handleWish()}>Favorites</p>
                        <p id='sec' className={orders ? "secActive" : null} onClick={() => handleOrders()}>Past Orders</p>
                    </div>
                </div>
                <div className="profileBody">
                    {account && <AccountSettings/>}
                    {wish && <WishList/>}
                    {orders && <PastPurchases/>}
                </div>
            </div>
        <Footer/>
    </div>
    )
}

export default ProfilePage
