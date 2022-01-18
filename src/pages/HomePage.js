import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
// import PopularProducts from '../components/PopularProducts'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <Fragment>
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Categories/>
            {/* <PopularProducts/> */}
            <Newsletter/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage
