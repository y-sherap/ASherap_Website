import React from 'react'
import { motion } from 'framer-motion'

const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y:-40}
  const animateTo = {opacity: 1, y:0}

  return (
    <div>
      <div>
        
      </div>
      <div>
                  <ul>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/">Home</a>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#about">About</a>
      </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.30}}
          onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#contact">Contact</a>
      </motion.li>
  </ul>
      </div>
    </div>
  )
}

export default NavLinks;