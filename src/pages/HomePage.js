import { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import About from '../components/About'

function HomePage() {
    useEffect(() => window.scrollTo(0, 0))
    return (
        <Fragment>
            <Announcement/>
            <Navbar/>
            <Landing/>
            <Categories/>
            <About/>
            <Newsletter/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage
