import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import {Routes, Route} from "react-router-dom"
function Post() {
  const params = useParams();
  const Navigate = useNavigate();
  const status = 4000;
  if (status == 2000) {
    return <Navigate to="/notfound" />;
  }

 const onclick = ()=>{
  console.log('hello');
Navigate('/about')


 }
  return (
    
    <div>
    <div>
    post {params.id}
    </div>
    <button onClick={onclick}>
    click
    </button>
   <Routes>
   <Route path="/show" element={<h1>this is show</h1>} />
   
   
   </Routes>
    
    </div>)
}

export default Post;
