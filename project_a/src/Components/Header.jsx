import React from 'react'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container justify-content-between">
  <div><a class="navbar-brand text-success" href="#">Hire Me</a></div>
  <div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Post a Job</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Job</a>
      </li>
    
    
    <button class="btn btn-outline-success  my-2  mx-4 my-sm-0" type="submit">Employer Login</button>
      <button class="btn btn-primary my-2 mx-4 my-sm-0" type="submit">Candidate Login</button>
      </ul>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
