import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";

function NavBarList(props) {

  let link = "/";
  if(!(props.name === "Home")){
      link = "/" + props.name;
  }

  return (
      <div>
        <li className="nav-item middle-list">
          <Link to={link} className="link m-2">{props.name}</Link>
        </li>
      </div>
  );
}

export default NavBarList;
