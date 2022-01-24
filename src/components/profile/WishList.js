import './wishlist.css'
import { Favorite } from '@material-ui/icons'
import TestImg from '../../images/bestProducts/Blouse.png'
import TestImg1 from '../../images/bestProducts/Hat.png'
import TestImg2 from '../../images/bestProducts/Pant.png'

function Wishlist() {
    return (
    <div className='wishlistContainer'>
        <div className="wishlistWrapper">
            <div className="wishlistHeading">
                <div className="wishlistHeadingTop">
                    <Favorite id="wishlistIconHeart"/>
                    <h1>David's Favorites</h1>
                </div>
                <p>1 Item</p>
            </div>
            <div className="wishlistBody">
                <div className="wishlistItem">
                    <div className="wishlistImageWrapper">
                        <img src={TestImg} alt="Favorite Product" />
                        <div className="wishlistDescriptionWrapper">
                            <h1 id='WDIT'>Blouse</h1>
                            <span>|</span>
                            <h1 id='WDIS'>M</h1>
                            <span>|</span>
                            <div id='WDIC'></div>
                        </div>
                    </div>
                    <div className="wishlistItemButtons">
                        <p>Add to Bag</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div className="wishlistItem">
                    <div className="wishlistImageWrapper">
                        <img src={TestImg2} alt="Favorite Product" />
                        <div className="wishlistDescriptionWrapper">
                            <h1 id='WDIT'>Blouse</h1>
                            <span>|</span>
                            <h1 id='WDIS'>M</h1>
                            <span>|</span>
                            <div id='WDIC'></div>
                        </div>
                    </div>
                    <div className="wishlistItemButtons">
                        <p>Add to Bag</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div className="wishlistItem">
                    <div className="wishlistImageWrapper">
                        <img src={TestImg1} alt="Favorite Product" />
                        <div className="wishlistDescriptionWrapper">
                            <h1 id='WDIT'>Blouse</h1>
                            <span>|</span>
                            <h1 id='WDIS'>M</h1>
                            <span>|</span>
                            <div id='WDIC'></div>
                        </div>
                    </div>
                    <div className="wishlistItemButtons">
                        <p>Add to Bag</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div className="wishlistItem">
                    <div className="wishlistImageWrapper">
                        <img src={TestImg2} alt="Favorite Product" />
                        <div className="wishlistDescriptionWrapper">
                            <h1 id='WDIT'>Blouse</h1>
                            <span>|</span>
                            <h1 id='WDIS'>M</h1>
                            <span>|</span>
                            <div id='WDIC'></div>
                        </div>
                    </div>
                    <div className="wishlistItemButtons">
                        <p>Add to Bag</p>
                        <p>Remove</p>
                    </div>
                </div>



            </div>
        </div>
    </div>
    )
}

export default Wishlist