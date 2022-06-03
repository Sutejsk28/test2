import React from 'react';
import ReactDOM from 'react-dom/client';
import SuggestCourses from "./suggest-courses"

function SuggestionPage(){
  return(
    <section>

    <hr />
    <div>
      <SuggestCourses title="Top Rated" />
      <SuggestCourses title="Recommended" />
    </div>

    </section>
  );
}
 export default SuggestionPage
