import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [list,setList] = useState([])

    const [userData, setUserData] = useState({
        username: "",
        colour: "",
        timeSpent: ["","","",""],
        review: ""
    })
  

  console.log(userData)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
    
    

    <AnswersList answersList={list}/>

      </section>
      <section className="survey__form">{/* a form should be here */}
        <Form  list={list} setList={setList}/>
      </section>
    </main>
  );
}

export default Survey;
