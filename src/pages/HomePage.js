import { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Landing from '../components/Landing'
import Slider from '../components/slider/Slider.js'
import Categories from '../components/categories/Categories'
import Footer from '../components/Footer'

function HomePage() {
    useEffect(() => window.scrollTo(0, 0))
    return (
        <Fragment>
            <Announcement/>
            <Navbar/>
            <Landing/>
            <Slider/>
            <Categories/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage
