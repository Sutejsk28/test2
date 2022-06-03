import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBarList from "./navbar-list";

function NavBarSearch() {
  return (
    <ul className="me-auto mb-2 mb-lg-0 ps-2 mt-2">
      <div className="input-group mb-2 ">
        <input type="text" className="form-control" placeholder="Search courses" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
    </ul>
  );
}

export default NavBarSearch;
