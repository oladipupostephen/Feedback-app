import React from "react";
import Feedback_item from "./Feedback_item";
import { useContext } from "react";
import feedbackcontext from '../context/FeedbackContext'
function Feedback_list() {
const {feedback} = useContext(feedbackcontext)

  if (!feedback && feedback.length === 0) {
    return <p>"no feedback yet"</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedback_item 
        key={item.id} 
        item={item} 
        
        />
      ))}

    </div>
  );
}

export default Feedback_list;
