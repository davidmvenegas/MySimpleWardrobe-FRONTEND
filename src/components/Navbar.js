import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 70px;
    ${mobile({ height: "50px", marginTop: "40px" })}
    box-shadow: 0 2px 6px -2px #ffffff45;
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
    ${mobile({ justifyContent: "center" })}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ padding: "10px 0px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ flex: 0 })}
`
const Logo = styled.h1`
    font-weight: 500;
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
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                </Left>
                <Center>
                    <Logo onClick={() => navigate('/')}>My Simple Wardrobe</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={() => navigate('/register')}>REGISTER</MenuItem>
                    <MenuItem onClick={() => navigate('/login')}>SIGN IN</MenuItem>
                    <MenuItem onClick={() => navigate('/cart')}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
