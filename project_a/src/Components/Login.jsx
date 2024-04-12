import React from 'react'

function login() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-12"></div>
         
          <div className="col-md-8 col-sm-12">
      <form className='shadow'>

        <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Email address</label>
          <input type="email" id="form2Example1" class="form-control" />
       
        </div>


        <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Password</label>
          <input type="password" id="form2Example2" class="form-control" />
          
        </div>


        <div class="row mb-4">
          <div class="col d-flex justify-content-center">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div class="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>


        <button type="button" class="btn btn-primary btn-large mb-4">Sign in</button>


        <div class="text-center">
          <p>Not a member? <a href="#!">Register Here</a></p>
          <p>or sign up with:</p>
          <button type="button"  className="btn btn-link  btn-floating mx-1">
            <i class="fa fa-google custom-icon "></i>
          </button>

          <button type="button"  className="btn btn-link btn-floating mx-1">
          <i class="fa fa-linkedin custom-icon"></i>
          </button>

          <button type="button"  className="btn btn-link btn-floating mx-1">
          <i class="fa fa-facebook-square custom-icon"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
          <i class="fa fa-instagram custom-icon"></i>
          </button>
        </div>
      </form>
      </div>
          
        </div>
      </div>
    </div>
  )
}

export default login
