import React from 'react'
import styled from 'styled-components'

function Footer() {

    var dateObj = new Date();
    var currentYear = dateObj.getFullYear();

    return (
        <>
            <FooterMenu>
                <a href="#">Tesla @ {currentYear}</a>
                <a href="#">Privacy & Legal</a>
                <a href="#">Contact</a>
                <a href="#">Career</a>
                <a href="#">Get Newsletter</a>
                <a href="#">News</a>
                <a href="#">Forums</a>
                <a href="#">Locations</a>

            </FooterMenu>

            <SmFooter>
                <li><a href="#">Tesla @ {currentYear}</a></li>
                <li><a href="#">Privacy & Legal</a></li>
                <li><a href="#">News</a></li>

            </SmFooter>
        </>

    )
}

export default Footer


const FooterMenu = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

    a{
        padding: 0 10px;
        color: black;
        font-size: 12px;
    }

    @media (max-width: 778px) {
        display: none;
    }
 
`

// This smallFooter is for small devices
const SmFooter = styled.div`
    display: none; 
    li{
        font-size: 12px;
        list-style-type: none;  
        padding: 5px;
    }
  
    @media (max-width: 778px) {
        display: block;    
    }


`