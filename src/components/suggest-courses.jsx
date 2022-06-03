import React from 'react';
import ReactDOM from 'react-dom/client';
import CourseBlock from "./course-block"

function SuggestionCourse(props){
  return(
    <div >

      <div className=" row m-3 mt-5" >
        <h2 className="ms-auto" style={{display: "inlineBlock"}}>{props.title} courses</h2>
        <a href="#" className="explore-link link me-auto" style={{display: "inlineBlock"}}><h6>Explore more courses</h6></a>
      </div>

      <div className="row ps-5">
        <CourseBlock creator="Sudeep" title="Web Development" />
        <CourseBlock creator="Sudeep" title="Web Development" />
        <CourseBlock creator="Sudeep" title="Web Development" />
        <CourseBlock creator="Sudeep" title="Web Development" />
      </div>

    </div>
  );
}

export default SuggestionCourse
