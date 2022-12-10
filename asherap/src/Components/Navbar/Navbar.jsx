import './navbar.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Navbar = () => {

  return (
    <div id="navbarContainer">
      <MobileNavigation />
      <Navigation />
    </div>
  )
}

export default Navbar