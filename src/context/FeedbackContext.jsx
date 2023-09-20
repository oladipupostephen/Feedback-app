import React from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../components/data/Feedback_data";
import { createContext, useState , useEffect} from "react";
const feedbackcontext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState(FeedbackData);
  const [isloading, setisloading]= useState (true)
  const [EditFeedback, SetEditFeedback] = useState({
    item: {},
    edit: false,
  });
useEffect(
()=>{

console.log('123')
},[]

)
const fetchfeedback =async ()=>{
const response = await fetch(``)
const data = await response.json()
setfeedback(data);
setisloading(false);

}

  const edit = (item) => {
    SetEditFeedback({
      item,
      edit: true,
    });
    console.log(item);
    console.log(EditFeedback);
  };

  const UpdateFeedback = (id, updateditem) => {
    setfeedback(
      feedback.map((item) =>  
        item.id === id ? { ...item, ...updateditem } : item
      )
    );
  };
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete?")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
    console.log(EditFeedback);
  };
  const addfeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setfeedback([newFeedback, ...feedback]);
    console.log(EditFeedback);
  };

  return (
    <feedbackcontext.Provider
      value={{
        feedback,
        deleteFeedback,
        addfeedback,
        edit,
        EditFeedback,
        UpdateFeedback,
        isloading,
      }}
    >
      {children}
    </feedbackcontext.Provider>
  );
};

export default feedbackcontext;
