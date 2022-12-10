import React from 'react'
import NavLinks from '../NavLinks'
import './navbar.css'
import {BiMenu} from 'react-icons/bi'

const MobileNavigation = () => {

  return (
    <div id="mobileNavigation">
      <nav>
        <BiMenu id="hamburger" 
          size='40px' color="white"
          onClick={()=> console.log("you clicked on the icon")} />
        <NavLinks />
      </nav>
    </div>

  )
}

export default MobileNavigation;