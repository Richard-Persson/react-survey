/* eslint-disable react/prop-types */
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

function Form({userDataSurvey,setUserDataSurvey}){

    const [userData, setUserData] = useState({
        username: "",
        colour: "",
        timeSpent: ["","","",""],
        review: ""
    })
    

    const submitForm = event =>{

        event.preventDefault();

        setUserDataSurvey(userData)
    }
   
    
    return(<>
    
<form className="form" onSubmit={submitForm}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
        
        <RadioButtons setUserData={setUserData} userData={userData}/>

  </div>
  <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
        

        <Checkboxes setUserData={setUserData} userData={userData}/>

        
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
      onChange={(e)=>{setUserData({...userData, review: e.target.value})}}
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      onChange={(e)=>{setUserData({...userData, username: e.target.value})}}/></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
       onChange={(e)=>{setUserData({...userData, email: e.target.value})}}/></label
 
  ><input className="form__submit" type="submit" value="Submit Survey!" />
</form>

    
    </>)

}


export default Form;