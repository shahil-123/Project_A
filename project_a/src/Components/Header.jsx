import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>




      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container justify-content-between">
          <div className="navbar-brand text-success"><Link className="logo-link" to="/">Hire Me</Link></div>
          <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className='mx-2 link-head' to="/"> Home </Link>

                </li>
                <li className="nav-item px-2">
                  <Link className='link-head'> Post a Job</Link>

                </li>
                <li className="nav-item px-2">

                  <Link className='link-head' to="./findjob">Job</Link>

                </li>
              </ul>

              <button class="btn btn-outline-success  my-2  mx-4 my-sm-0" type="submit">Employer Login</button>
              <a href="./Login" target="_blank" rel="noopener noreferrer" className="custom-link"> <button class="btn btn-primary my-2 mx-4 my-sm-0" type="submit">Candidate Login</button></a>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
