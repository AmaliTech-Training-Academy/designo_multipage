import React from 'react'
import {
    Nav,
    Logo,
    NavLinks,
    Bars
} from './headerStyles'

function Header() {
  return (
    <Nav>
        <Logo src="/assets/shared/desktop/logo-dark.png" />
        <NavLinks>
            <span>our company</span>
            <span>Locations</span>
            <span>Contact</span>
        </NavLinks>
        <Bars src='/assets/shared/mobile/icon-hamburger.svg'/>
    </Nav>
  )
}

export default Header
