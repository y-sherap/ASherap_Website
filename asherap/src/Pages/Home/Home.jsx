import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import './home.css'

const Home = () => {

  return(
    <div id="homeContainer">
      <div id="homeHeader">
        <div id="headerTitle">
          Anzee Sherap
        </div>
        <div id="subheader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
      </div>
      <Portfolio />
      <About/>
    </div>
  )
}

export default Home