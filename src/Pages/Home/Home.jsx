import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import './home.css'

const Home = () => {

  return(
    <div id="homeContainer">
      <div id="homeHeader">
        <div id="headerTitle">
          FirstName LastName
        </div>
        <div id="subheader">
        Hello! This is a collection of my personal projects made during free time.
        </div>
      </div>
      <Portfolio />
      <About/>
      <Contact />
    </div>
  )
}

export default Home