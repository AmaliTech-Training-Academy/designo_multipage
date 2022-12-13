import React, {useState} from 'react'
import {
    Nav,
    Logo,
    NavLinks,
    Bars,
    Close
} from './headerStyles'
import MobileNavMenu from './MobileNavMenu';
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const bars = <Bars>
                  <img src='/assets/shared/mobile/icon-hamburger.svg' onClick={() => setIsOpen(!isOpen)} alt=''/>
              </Bars>;
  const close = <Close>
                  <img src='/assets/shared/mobile/icon-close.svg' onClick={() => setIsOpen(!isOpen)} alt=''/>
                </Close>;
  return (
    <>
      <Nav>
          <Link to="/">
            <Logo src="/assets/shared/desktop/logo-dark.png" />
          </Link>
          <NavLinks>
              <Link to='/about'>our company</Link>
              <Link to='/location'>Locations</Link>
              <Link to='/contact'>Contact</Link>
          </NavLinks>
          {isOpen ? close : bars}
      </Nav>
      {isOpen && <MobileNavMenu closeMenu={() => setIsOpen(false)}/>}
    </>
  )
}

export default Header
