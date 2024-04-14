import React, { useState } from "react";
import plus from "./img/Group 24.svg";
import "./Question.css";

const Question = ({ question, answer }: any) => {
  const [descriptionShowing, setDescriptionShowing] = useState(false);

  const handleQuestionClicked = () => {
    setDescriptionShowing(!descriptionShowing);
  };

  return (
    <>
      <div className="question" onClick={handleQuestionClicked}>
        <img src={plus} alt="" className="plus"/>
        <div className="questionText">{question}</div>
      </div>
      {descriptionShowing ? (
        <div className="questionAnswer">{answer}</div>
      ) : null}
    </>
  );
};

export default Question;
