import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "../components/navbar"
function Signup(){
  return(
    <div>
      <NavBar />
      <div className="container mt-5">
        <h1>Sign up</h1>

        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">

                <form action="/register" method="POST">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="username" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password" />
                  </div>
                  <button type="submit" className="btn btn-primary m-3">Sign up</button>
                </form>

              </div>
            </div>

            <div className="col-sm-4 m-5">
              <div className="card social-block">
                <div className="card-body">
                  <a className="btn btn-block" href="/auth/google" role="button">
                    <i className="fab fa-google"></i>
                    Sign Up with Google
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Signup
