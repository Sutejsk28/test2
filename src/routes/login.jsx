import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/navbar"
function Login(){
  return(
    <div>

      <NavBar />
      <div className="container mt-5">
        <h1>Login</h1>

        <div className="row">
          <div className="col-sm-8">

            <div className="card">
              <div className="card-body">
                <form action="/login" method="POST">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="username" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password" />
                  </div>
                  <button type="submit" className="btn btn-primary m-3">Login</button>
                </form>
              </div>
            </div>

            <div className="col-sm-4 m-5">
              <div className="card">
                <div className="card-body">
                  <a className="btn btn-block" href="/auth/google" role="button">
                    <i className="fab fa-google m-2"></i>
                    Sign In with Google
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

export default Login
