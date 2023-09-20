import React from "react";

import Header from "./components/header";
import Feedback_list from "./components/Feedback_list";

import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AbouticonLink from "./components/shared/AbouticonLink";
import Post from "./components/pages/Post";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <Feedbackstats />
                  <Feedback_list />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
        </div>
        <AbouticonLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
