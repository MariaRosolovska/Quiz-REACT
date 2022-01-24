import React from 'react';
import shuffle from 'lodash.shuffle';

export default function Question({ question, answerQuestion }) {
  const answer = shuffle([...question.incorrect_answers, question.correct_answer]);


  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question}}/>

      {answer.map((answer) => (
        <button key={answer} onClick={() => answerQuestion(answer)} 
        dangerouslySetInnerHTML={{ __html: answer}} />
      ))}
    </div>
  );
}
