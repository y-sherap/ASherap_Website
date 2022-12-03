import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  return (
    <div id="navbarContainer">
      <div id="leftNavbar">
        <Link to ='/'>Logo</Link>
      </div>
      <div id="rightNavbar">
        <Link to ='/about'>About Me</Link>
        <Link to ='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar