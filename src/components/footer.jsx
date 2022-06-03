import React from 'react';
import ReactDOM from 'react-dom/client';
import FooterContent from "./footer-content"

function Footer(){
  return(
    <section className="footer" id="footer">
      <hr />
      <div className="row ps-5 pt-5 pb-5" >
        <div className="col-lg-4 col-md-6" style={{textAlign: "left"}}>
          <h2 className="">E-professor</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        </div>
        <FooterContent />
        <FooterContent />
      </div>
      <hr />
      <h6 style={{textAlign: "center"}}>© E-professor</h6>
    </section>
  );
}

export default Footer
