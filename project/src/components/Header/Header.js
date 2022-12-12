import React, {useState} from 'react'
import {
    Nav,
    Logo,
    NavLinks,
    Bars,
    Close
} from './headerStyles'
import MobileNavMenu from './MobileNavMenu';

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
          <Logo src="/assets/shared/desktop/logo-dark.png" />
          <NavLinks>
              <span>our company</span>
              <span>Locations</span>
              <span>Contact</span>
          </NavLinks>
          {isOpen ? close : bars}
      </Nav>
      {isOpen && <MobileNavMenu closeMenu={() => setIsOpen(false)}/>}
    </>
  )
}

export default Header
