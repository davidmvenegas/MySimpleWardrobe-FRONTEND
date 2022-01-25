import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ShoppingCartOutlined, Person } from '@material-ui/icons'
import { Badge } from '@mui/material'
import LogoImage from '../images/logo.png'
import { logout } from "../redux/userRedux"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 70px;
    background-color: white;
    margin-bottom: .25rem;
    box-shadow: 0 2px 6px -2px #00000045;
    ${mobile({ height: "50px", marginTop: "40px" })}
`
const Wrapper = styled.div`
    padding: 13.5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 2rem;
    ${mobile({ justifyContent: "center" })}
`
const ImageLogo = styled.img`
    height: 3.75rem;
    width: 3.75rem;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ flex: 0 })}
`
const Logo = styled.h1`
    font-weight: 600;
    cursor: pointer;
    ${mobile({ position: "absolute", fontSize: "26px", top: "6px", left: 0, width: "100%" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center" })}
    `
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)
    function handleLogout() {
        dispatch(logout())
        navigate("/")
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <ImageLogo onClick={() => navigate('/')} src={LogoImage}/>
                </Left>
                <Center>
                    <Logo onClick={() => navigate('/')}>My Simple Wardrobe.</Logo>
                </Center>
                <Right>
                    {!user &&
                    <Fragment>
                        <MenuItem onClick={() => navigate('/register')}>REGISTER</MenuItem>
                        <MenuItem onClick={() => navigate('/login')}>SIGN IN</MenuItem>
                    </Fragment>}
                    {user &&
                    <Fragment>
                        <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
                        <MenuItem onClick={() => navigate('/profile')}><Person style={{fontSize: "2rem"}}/></MenuItem>
                    </Fragment>}
                    <MenuItem onClick={() => navigate('/cart')}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined style={{fontSize: "1.75rem"}}/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
