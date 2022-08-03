import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App