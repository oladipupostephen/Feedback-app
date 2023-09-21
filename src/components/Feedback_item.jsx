import React from "react";
import Card from "./data/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import feedbackcontext from "../context/FeedbackContext";
function Feedback_item({ item }) {
  const { deleteFeedback, edit } = useContext(feedbackcontext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          deleteFeedback(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        onClick={() => {
          edit(item);
        }}
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feedback_item;
