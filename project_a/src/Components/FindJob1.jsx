import React from "react";


function FindJob1() {
  return (
    <div>
       <section className="video-sec py-5">
        <div className="container-fluid">
          <div className="container text-center">
            <h2 className="text-center pb-2">Let us find a job for you</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              reprehenderit rem magni corrupti.
            </p>

            <div className="row">
              <div className="col-md-1 col-sm-12 py-4"></div>
              <div className="col-md-5 col-sm-12 py-4">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Job Title, Keywords of company"
                  />
                </div>
              </div>
              <div className="col-md-5 col-sm-12 py-4 d-flex">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Location"
                />
                &nbsp;&nbsp;
                <div className="btn btn-primary btn-find-job">Search</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-7 col-sm-12">
              <h5 className="my-4">Job Based on Your Prefences</h5>

              <div class="card shadow">
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5>Graphics Designer</h5>
                    {/* <i class="fa fa-telegram" aria-hidden="true"></i> */}
                    <div className="icons">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      &nbsp;&nbsp;
                      <i class="fa fa-rss" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="d-flex">
                    <p>xyz.pvt ltd</p> &nbsp;&nbsp;
                    <p>
                      <i class="fa fa-map-marker"> </i> &nbsp;&nbsp;Kolkata West
                      Bengal
                    </p>
                  </div>
                  <i class="fa-thin fa-location-dot"></i>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>
                        <i class="fa fa-briefcase"></i>&nbsp;&nbsp;1 - 3 Years
                      </p>
                      &nbsp;&nbsp;
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;
                        2.25 Lacs P.A
                      </p>
                    </div>
                    <div className="btn btn-primary">Apply</div>
                  </div>
                </div>
              </div>
              <div className="card my-5 shadow">
                <div class="card-body">
                  <h6>Job Description</h6>
                  <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo vitae ea, nam blanditiis labore officia repudiandae quos temporibus obcaecati perferendis in alias ex atque, architecto sapiente velit ab nisi impedit. Ipsa, consequuntur.</p>
                </div>
              </div>
              <div class="card mt-5 mb-3 shadow">
                <div class="card-body">
                  <h6>Job Details</h6>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nam aspernatur laborum maiores delectus.</p>
                </div>
                <div className="d-flex px-3">
                  <p><b>Salary:</b></p>&nbsp;&nbsp;&nbsp;
                  <p>2.25 LPA</p>
                </div>
                <div className="d-flex px-3">
                  <p><b>Job Type</b></p>&nbsp;&nbsp;&nbsp;
                  <p>Full Time</p>
                </div>
                <div className="d-flex px-3">
                  <p><b>Shift:</b></p>&nbsp;&nbsp;&nbsp;
                  <p>Day</p>
                </div>
                <div className="d-flex px-3">
                  <p><b>Experience:</b></p>&nbsp;&nbsp;&nbsp;
                  <p>1 Years</p>
                </div>
              </div>
              <div class="card my-5 shadow">
                <div class="card-body">
              <h6> Key Skills</h6> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur esse temporibus eveniet expedita.</p>
              <p> <b>1. Photographer</b></p>
              <p> <b>2. Graphic Designer</b></p>
              <p> <b>3. Marketing</b></p>
                </div>
              </div>
              <h6>Similar Jobs</h6>
              <div class="card shadow">
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5>Graphics Designer</h5>
                    {/* <i class="fa fa-telegram" aria-hidden="true"></i> */}
                    <div className="icons">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      &nbsp;&nbsp;
                      <i class="fa fa-rss" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="d-flex">
                    <p>xyz.pvt ltd</p> &nbsp;&nbsp;
                    <p>
                      <i class="fa fa-map-marker"> </i> &nbsp;&nbsp;Kolkata West
                      Bengal
                    </p>
                  </div>
                  <i class="fa-thin fa-location-dot"></i>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>
                        <i class="fa fa-briefcase"></i>&nbsp;&nbsp;1 - 3 Years
                      </p>
                      &nbsp;&nbsp;
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;
                        2.25 Lacs P.A
                      </p>
                    </div>
                    <div className="btn btn-primary">Apply</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <h5 className="my-4">Recomended Job</h5>
              <div class="card shadow">
                <div class="card-body">
                  <h5>Graphics Designer</h5>

                  <div className="d-flex">
                    <p>xyz.pvt ltd</p> &nbsp;&nbsp;
                    <p>
                      <i class="fa fa-map-marker"> </i> &nbsp;&nbsp;Kolkata West
                      Bengal
                    </p>
                  </div>
                  <i class="fa-thin fa-location-dot"></i>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>
                        <i class="fa fa-briefcase"></i>&nbsp;&nbsp;1 - 3 Years
                      </p>
                      &nbsp;&nbsp;
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;
                        2.25 Lacs P.A
                      </p>
                    </div>
                  </div>
                  <h6>Job Description</h6>
                  <div className="d-flex justify-content-between">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aliquid vitae velit!
                    </p>
                    <a href="">
                      <h6 className="mt-5">Apply</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card shadow my-5">
                <div class="card-body">
                  <h5>Graphics Designer</h5>

                  <div className="d-flex">
                    <p>xyz.pvt ltd</p> &nbsp;&nbsp;
                    <p>
                      <i class="fa fa-map-marker"> </i> &nbsp;&nbsp;Kolkata West
                      Bengal
                    </p>
                  </div>
                  <i class="fa-thin fa-location-dot"></i>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>
                        <i class="fa fa-briefcase"></i>&nbsp;&nbsp;1 - 3 Years
                      </p>
                      &nbsp;&nbsp;
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;
                        2.25 Lacs P.A
                      </p>
                    </div>
                  </div>
                  <h6>Job Description</h6>
                  <div className="d-flex justify-content-between">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aliquid vitae velit!
                    </p>
                    <a href="">
                      <h6 className="mt-5">Apply</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card shadow my-5">
                <div class="card-body">
                  <h5>Graphics Designer</h5>

                  <div className="d-flex">
                    <p>xyz.pvt ltd</p> &nbsp;&nbsp;
                    <p>
                      <i class="fa fa-map-marker"> </i> &nbsp;&nbsp;Kolkata West
                      Bengal
                    </p>
                  </div>
                  <i class="fa-thin fa-location-dot"></i>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>
                        <i class="fa fa-briefcase"></i>&nbsp;&nbsp;1 - 3 Years
                      </p>
                      &nbsp;&nbsp;
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;
                        2.25 Lacs P.A
                      </p>
                    </div>
                  </div>
                  <h6>Job Description</h6>
                  <div className="d-flex justify-content-between">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aliquid vitae velit!
                    </p>
                    <a href="">
                      <h6 className="mt-5">Apply</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card shadow">
                <div class="card-body">
                  <h5>Graphics Designer</h5>

                  <div className="d-flex">
                    <p>xyz.pvt ltd</p> &nbsp;&nbsp;
                    <p>
                      <i class="fa fa-map-marker"> </i> &nbsp;&nbsp;Kolkata West
                      Bengal
                    </p>
                  </div>
                  <i class="fa-thin fa-location-dot"></i>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p>
                        <i class="fa fa-briefcase"></i>&nbsp;&nbsp;1 - 3 Years
                      </p>
                      &nbsp;&nbsp;
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;
                        2.25 Lacs P.A
                      </p>
                    </div>
                  </div>
                  <h6>Job Description</h6>
                  <div className="d-flex justify-content-between">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aliquid vitae velit!
                    </p>
                    <a href="">
                      <h6 className="mt-5">Apply</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default FindJob1

