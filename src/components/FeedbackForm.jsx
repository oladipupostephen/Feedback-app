import React from "react";
import Card from "./data/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useEffect } from "react";
import { useContext } from "react";
import feedbackcontext from "../context/FeedbackContext";
function FeedbackForm() {
  const [text, SetText] = useState("");
  const [rating, SetRating] = useState();
  const [btndisabled, SetBtndisabled] = useState(true);
  const [message, SetMessage] = useState("");
  const { addfeedback, EditFeedback, UpdateFeedback } =
    useContext(feedbackcontext);

  useEffect(() => {
    if (EditFeedback.edit === true) {
      SetBtndisabled(false);
      SetText(EditFeedback.item.text);
      SetRating(EditFeedback.item.rating);
    }
  }, [EditFeedback]);
  const handlechange = (e) => {
    if (text === "") {
      SetBtndisabled(true);
      SetMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      SetMessage("Text must be at least 10 characers");
    } else {
      SetMessage("");
      SetBtndisabled(false);
    }
    SetText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newfeedback = {
        text,
        rating,
      };
      if (EditFeedback.edit === true) {
        UpdateFeedback(EditFeedback.item.id, newfeedback);
      } else {
        addfeedback(newfeedback);
      }

      SetText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect
          select={(rating) => {
            SetRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handlechange}
          />
          <Button type="submit" isdisabled={btndisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
