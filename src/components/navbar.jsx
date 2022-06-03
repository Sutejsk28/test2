import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBarList from "./navbar-list";
import NavBarSearch from "./navbar-search";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0 ">
        <div className="container-fluid Navi">
          <a className="navbar-brand" href="#">E-professor</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <NavBarSearch />

          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ps-2 ">
            <NavBarList name="Home" isActive="active" />
            <NavBarList name="Courses" />
            <NavBarList name="Categories" />
            <NavBarList name="Blogs" />
          </ul>
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="btn btn-outline-primary me-1 ms-1 buttons" href="/login" role="button ">Login</a>
              <a className="btn btn-primary me-1 ms-1 buttons" href="/signup" role="button ">Sign Up</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default NavBar;
