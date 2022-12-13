import React from 'react'
import {
    Nav,
    Logo,
    NavLinks,
    Bars
} from './headerStyles'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Nav>
      <Link to={'/'}>
        <Logo src="/assets/shared/desktop/logo-dark.png" />
      </Link>
        <NavLinks>
            <span>our company</span>
            <span>Locations</span>
            <Link to={'/contact'} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact</Link>
        </NavLinks>
        <Bars src='/assets/shared/mobile/icon-hamburger.svg'/>
    </Nav>
  )
}

export default Header
