import './categories.css'
import { ChevronRight } from "@material-ui/icons"
import Hat from '../images/bestProducts/Hat.png'
import Hoodie from '../images/bestProducts/Hoodie.png'
import Pant from '../images/bestProducts/Pant.png'
import Shoe from '../images/bestProducts/Shoe.png'
import Shirt from '../images/bestProducts/Shirt.png'
import Blouse from '../images/bestProducts/Blouse.png'

function Categories() {
    return (
        <div className='categoriesContainer'>
            <h1 className='featuredProductsTitle'>Featured Products</h1>
            <div className="categoriesWrapper">
                <div className="aCategory">
                    <img src={Hat} alt="img" />
                    <div className="aCategoryText">
                        <h1>Washed Baseball Cap</h1>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src={Pant} alt="img" />
                    <div className="aCategoryText">
                        <h1>Althletic Jogger</h1>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src={Blouse} alt="img" />
                    <div className="aCategoryText">
                        <h1>Blouse</h1>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src={Shoe} alt="img" />
                    <div className="aCategoryText">
                        <h1>Lace-Up Sneaker</h1>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src={Shirt} alt="img" />
                    <div className="aCategoryText">
                        <h1>Crew T-Shirt</h1>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src={Hoodie} alt="img" />
                    <div className="aCategoryText">
                        <h1>Shirpa Jacket</h1>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
