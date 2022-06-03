import React from 'react';
import ReactDOM from 'react-dom/client';
import img from './images/Home-image.jpg'

function Home(props) {
  return(
    <div className="row home">
      <div className="col-lg-6 col-m-4 intial-info">
        <h1>Learning offline is such a 2019 thing!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst.</p>
        <button type="button" className="btn btn-primary btn-lg" styles={{display: "flex", alignItems: "center"}}>Explore all courses </button>
      </div>
      <div className="col-lg-6 col-md-8  home-image">
        <img  className="bg img-fluid" src={img} alt="Student Image" />
      </div>
    </div>
  );
}

export default Home;
