import {Route, Routes} from 'react-router'
import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home/Home'


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />   
        </Routes>
      </main>
    </div>
  )
}

export default App
