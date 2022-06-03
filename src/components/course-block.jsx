import React from 'react';
import ReactDOM from 'react-dom/client';
import image from "./images/course-image.jpg"

function CourseBlock(props){
  return(
    <a href="#" className="col-lg-4 col-m-6" style={{width: "20rem"}}>
      <div className="course-block m-3 me-5 ms-5">
        <img src={image} className="course-image" />
        <h6 className="mt-1 mb-1">{props.title}</h6>
        <p className="me-2 mb-1">By {props.creator}</p>
        <p>Rating: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
      </div>
    </a>
  );
}

export default CourseBlock
