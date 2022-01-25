import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { editWishlist } from "../../redux/authRedux"
import { Favorite, FavoriteBorder, ShoppingCartOutlined } from "@material-ui/icons"

const Image = styled.img`
    height: 75%;
`
const Info = styled.div`
    opacity: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all .3s ease;
    cursor: pointer;
`
const Clicker = styled.div`
position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    cursor: pointer;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    transition: all .3s ease;
    z-index: 200;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.085);
        cursor: pointer;
    }
`
const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 900;
    color: white;
    -webkit-text-stroke: 1px black;
    margin-bottom: 2rem;
    text-align: center;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    min-width: 280px;
    background-color: #f5fbfd;
    flex: 1;
    margin: 5px;
    &:hover ${Info} {
        opacity: 1;
    }
`

function ShoppingItem({item}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    const currentWishlist = useSelector((state) => state.wishlist.wishlist)
    const wishlistID = useSelector((state) => state.wishlist.wishlistId)
    const liked = currentWishlist.includes(item._id)
    
    function handleAddToWishlist() {
        const updatedWishlist = [...currentWishlist, item._id]
        const userInput = {wishlist: updatedWishlist}
        editWishlist(wishlistID, userInput, dispatch)
    }
    function handleRemoveFromWishlist() {
        const itemIndex = currentWishlist.indexOf(item._id)
        const updatedWishlist = [...currentWishlist.slice(0, itemIndex), ...currentWishlist.slice(itemIndex + 1)]    
        const userInput = {wishlist: updatedWishlist}
        editWishlist(wishlistID, userInput, dispatch)
    }

    return (
        <Container>
            <Image src={item.img}/>
            <Clicker onClick={() => navigate(`/product/${item._id}`)}></Clicker>
            <Info>
                <Title>{item.title}</Title>
                <IconContainer>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    {currentUser &&
                    <Icon>
                        {liked ? <Favorite onClick={handleRemoveFromWishlist} id="favoriteShoppingButtonSolid"/> : <FavoriteBorder onClick={handleAddToWishlist} id="favoriteShoppingButtonOutline"/>}
                    </Icon>}
                </IconContainer>
            </Info>
        </Container>
    )
}

export default ShoppingItem
