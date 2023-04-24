import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'

//NavLinks pending


export default function Navbar() {

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/')
  }


  return (

    <div>
      <nav className="navbar fixed-top navbar-light bg-dark py-4 shadow-lg">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand ms-5 me-5 text-white">PoDyS</Link>
          <form className="d-flex me-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className="d-flex">
            <Link to='/signup' className='btn text-white me-2'>Sign up</Link>
            <Link to='/login' className='btn btn-success rounded rounded-3 text-white me-5'>Log In</Link>

          </div>
        </div>
      </nav>
    </div>


  )
}
