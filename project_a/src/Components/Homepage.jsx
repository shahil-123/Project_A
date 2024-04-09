import React from "react";

function Homepage() {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-sm-12">
              <h1>Let us Find a job for you</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quas dolorum ex, nam, rerum omnis aperiam impedit atque
                laudantium voluptatem nisi iusto!
              </p>
              <div className="search-bar">
                <input type="text" className="input-find-job" />
                <button className="btn btn-primary btn-find-job">
                  Find Job
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center my-5 py-5">
              <div className="circle1 ">
                <div className="circle2">
                  <div className="circle3">
                    <img
                      src="/assets/images/man.png"
                      className="img-fluid profile-img my-4"
                      alt="persion"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="find-job">
        <div className="container-fluid">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-6 col-sm-12 py-5">
                <h1> Let Emploers Find You</h1>
                <p className="">
                  Get best Matched at your Email. Sign up Today
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-center">
                <div className="btn btn-success btn-circle">
                  Create Your Resume
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="popular-category text-center py-5">
            <h1>Popular Categories</h1>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon1.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Digital Marketing</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon2.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Photography</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon3.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Ui/Ux Designer </h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon4.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Account/Finance</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon5.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Customer Care</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon6.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Health Care</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon7.jpg"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Automative Jobs </h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon8.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Design</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="show-btn text-center m-auto my-5">
              <div className="btn btn-primary">Show More</div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-sec py-5">
        <div className="container-fluid">
          <div className="container text-center">
            <h2 className="text-center pb-4">How Company Work</h2>
            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/jDLuJLoaA_g?si=Q9U5CfwZVmlPbw2q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-center pt-5"> How it Work</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quod
            consectetur odit adipisci quidem, dolor exercitationem ea beatae eum
            voluptatem ut rerum!
          </p>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-3 col-sm-12">
            <div class="card">
              <div class="card-body text-center ">
                <img
                  src="/assets/images/icon4.png"
                  className="img-fluid profile-img my-4"
                  alt="persion"
                />
                <h5>Search Job </h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div class="card">
              <div class="card-body text-center">
               
                <img
                  src="/assets/images/icon1.png"
                  className="img-fluid profile-img my-4"
                  alt="persion"
                />
                <h3>Apply For Job</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div class="card">
              <div class="card-body text-center">
               
                <img
                  src="/assets/images/icon7.jpg"
                  className="img-fluid profile-img my-4 "
                  alt="persion"
                />
                <h5>Get Your Job</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-12"></div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
