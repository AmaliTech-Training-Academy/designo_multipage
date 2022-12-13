import React from 'react'
import styled from 'styled-components'

function MobileNavMenu(props) {
  return (
    <Menu onClick={() => props.closeMenu()}>
        <MobileNav>
            <span onClick={() => props.closeMenu()}>our company</span>
            <span onClick={() => props.closeMenu()}>location</span>
            <span onClick={() => props.closeMenu()}>Contact</span>
        </MobileNav>
    </Menu>
  )
}

export default MobileNavMenu

const Menu = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`
const MobileNav = styled.div`
    background: rgb(0, 0, 0);
    width: 100%;
    height: 235px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span {
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        letter-spacing: 2px;
        color: #FFFFFF;
        text-transform: uppercase;
        width: 90%;
        margin: 0 auto;
    }
`