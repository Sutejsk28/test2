import React from 'react';
import ReactDOM from 'react-dom/client';
import FooterList from "./footer-list"

function FooterContent(){
  return(
      <div className="mt-1 footer-links col-lg-3 col-md-6">
        <FooterList name="Our Partners" />
        <FooterList name="Our Partners" />
        <FooterList name="Our Partners" />
        <FooterList name="Our Partners" />
      </div>
  );
}

export default FooterContent
