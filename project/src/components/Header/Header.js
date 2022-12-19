import React, {useState} from 'react'
import {
    Nav,
    Logo,
    Line,
    NavLinks,
    Bars,
    Close
} from './headerStyles'

import MobileNavMenu from './MobileNavMenu';
import { Link } from 'react-router-dom'

function Header(props) {
  const dark_logo = "/assets/shared/desktop/logo-dark.png";
  const light_logo = "/assets/shared/desktop/logo-light.png";

  const [isOpen, setIsOpen] = useState(false);

  const bars = <Bars footer={props.footer}>
                  <img src='/assets/shared/mobile/icon-hamburger.svg' onClick={() => setIsOpen(!isOpen)} alt=''/>
              </Bars>;
  const close = <Close footer={props.footer}>
                  <img src='/assets/shared/mobile/icon-close.svg' onClick={() => setIsOpen(!isOpen)} alt=''/>
                </Close>;
  return (

    <>
      <Nav footer={props.footer}>
          <Link to="/">
            <Logo footer={props.footer} />
          </Link>
          <Line footer={props.footer}>.</Line>
          <NavLinks footer={props.footer}>
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
