import './categories.css'
import { ChevronRight } from "@material-ui/icons"

function Categories() {
    return (
        <div className='categoriesContainer'>
            <div className="categoriesWrapper">
                <div className="aCategory">
                    <img src="" alt="img" />
                    <div className="aCategoryText">
                        <h1>Title</h1>
                        <h2>Subtitle</h2>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src="" alt="img" />
                    <div className="aCategoryText">
                        <h1>Title</h1>
                        <h2>Subtitle</h2>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src="" alt="img" />
                    <div className="aCategoryText">
                        <h1>Title</h1>
                        <h2>Subtitle</h2>
                        <div className="buttonWrapperCat">
                            <button>Buy Now</button><ChevronRight id="catRight"/>
                        </div>
                    </div>
                </div>
                <div className="aCategory">
                    <img src="" alt="img" />
                    <div className="aCategoryText">
                        <h1>Title</h1>
                        <h2>Subtitle</h2>
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
