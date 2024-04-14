import React from "react";
import "./CommonQuestions.css";
import Question from "./Question";
import { contactData } from "../Contact";

const CommonQuestions = () => {
  return (
    <div className="commonQuestions">
      <div className="cq--headline">{contactData.group2.title}</div>
      <div className="cq--questions_container">
        {contactData.group2.ques.map((info) => (
          <div key={info.ques}>
            <Question question={info.ques} answer={info.ans} />
            <div className="cq--dark_line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
