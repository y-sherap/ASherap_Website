import React from 'react'
import NavLinks from '../NavLinks'
import './navbar.css'
import {BiMenu} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'
import { useState } from 'react'

const MobileNavigation = () => {

  const [open, setOpen] = useState(false)

  const hamburgerIcon = 
    <BiMenu id="hamburger" 
    size='40px' color="black"
    onClick={()=> setOpen(!open)} />

  const closeIcon = 
    <GrFormClose id="hamburger" 
    size='40px' color="black"
    onClick={()=> setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false);

  return (
    <div id="mobileNavigation">
      <nav>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
    </div>

  )
}

export default MobileNavigation;