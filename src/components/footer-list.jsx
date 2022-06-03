import React from 'react';
import ReactDOM from 'react-dom/client';

function FooterList(props){
  return(
    <div>
      <a href="#" className="link footer-links" ><h5>{props.name}</h5></a>
    </div>
      );
    }

    export default FooterList
