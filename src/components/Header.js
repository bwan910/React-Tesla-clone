import React, { Link, useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux';

function Header() {
    // For the burgerbutton open close navbar button state
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            {/* logo */}
            <a>
                <img src="/images/logo.svg"></img>
            </a>
            {/* Menu items in the center */}
            <Menu>
                {/* // Looping data from the redux carSlice.js  */}
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            {/* Right side menu */}
            <RightMenu>
                <a href="/page">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
            
            {/*The navbar burger button*/}
            <BurgerButton onClick={() => setBurgerStatus(true)} />

            {/* Items in burger navbar */}
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">About</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex: 1;


    a{
        color: black;
        text-transform: uppercase;
        font-weight: 300;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items:center;

    a{
        color: black;
        font-weight: 300;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }

    
`

const BurgerButton = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`