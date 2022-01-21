import { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Landing from '../components/Landing'
import Footer from '../components/Footer'

function HomePage() {
    useEffect(() => window.scrollTo(0, 0))
    return (
        <Fragment>
            <Announcement/>
            <Navbar/>
            <Landing/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage
