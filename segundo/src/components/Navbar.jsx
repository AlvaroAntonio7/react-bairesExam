

import React from 'react'
import {NavLink, NavLnk} from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className='collapse navbar-collapse' id='navbarSuppo'></div>
    <ul className='navbar-nav'>
        <li className='nav-item active'>
            <NavLink className="nav-lin text-light mx-5" to="/" data-testid="Home">Home</NavLink>
        </li>
        <li className='nav-item active'  >
            <NavLink className="nav-lin text-light mx-5" to="/stocks" data-testid="My_Stoks">My_Stocks</NavLink>
        </li>
        <li className='nav-item active'  >
            <NavLink className="nav-lin text-light mx-5" to="/fund" data-testid="My_Fund">Mt_Fund</NavLink>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
