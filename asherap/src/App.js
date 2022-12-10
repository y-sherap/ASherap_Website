import {Route, Routes} from 'react-router'
import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />   
          <Route path='/#abt-me' element={ <About /> } />  
          {/* <Route path='/resume' element={ <Resume /> } />   */}
          <Route path='/#contact' element={ <Contact /> } />  
        </Routes>
      </main>
    </div>
  )
}

export default App
