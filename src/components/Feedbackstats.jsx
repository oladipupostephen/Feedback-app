import React from "react";
import { useContext } from "react";
import feedbackcontext from '../context/FeedbackContext'
function Feedbackstats() {

  const {feedback} = useContext(feedbackcontext)
  const average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reveiws</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default Feedbackstats;
