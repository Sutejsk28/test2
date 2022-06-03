import React from 'react';
import ReactDOM from 'react-dom/client';
import FrontPage from "../components/frontpage"
import SuggestionPage from "../components/suggestionpage"
import Footer from "../components/footer.jsx"

function HomePage() {
  return (
    <div>
      <FrontPage />
      <SuggestionPage />
      <Footer />
    </div>
  );
}

export default HomePage;
