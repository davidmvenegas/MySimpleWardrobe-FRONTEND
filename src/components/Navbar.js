import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px", marginTop: "40px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
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
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "5px" })}
`
const Input = styled.input`
    border: none;
    outline: none;
    line-height: 1.4;
    ${mobile({ width: "115px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ flex: 0 })}
`
const Logo = styled.h1`
    font-weight: bold;
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
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:'gray', fontSize:'16px'}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo onClick={() => navigate('/')}>Mars</Logo>
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
