import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.main.css'
import {Home, MyStocks, MyFund} from './pages'
import NavBar from './components/Navbar'

//do not remove (Used for getting current path in tests)

export const LocationDisplay = () =>{
  const location = useLocation()
  return(
    <div data-testid="location-display" style={{display:  'none'}}>
      {location.pathname}
    </div>
  )
}

function App() {
  return (
    <div>
      <Router basename={`/${process.env.REACT_APP_HASH}`}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/stocks" exact element={<MyStocks />} />
          <Route path="/fund" exact element={<MyFund />} />
        </Routes>
        <LocationDisplay/>
      </Router>

    </div>
  )
}

export default App
