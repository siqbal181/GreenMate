import { useState } from 'react';
import "./DailyQuestions.css";

const questionsList = [
  "Are you going to walk today instead of using the bus?",
  "Will your shower last less than 10 minutes today?",
  "Are you using a reusable cup for your drinks today?",
  "Will you turn off lights when leaving a room?",
  "Are you recycling your waste today?",
  "Will you use a reusable bag for shopping today?",
  "Are you opting for vegetarian meals today?",
  "Will you use public transportation instead of driving?",
  "Are you reducing water usage today?",
  "Will you unplug electronics when not in use?"
];

export const DailyQuestions = () => {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSwipe = () => {
    if (answeredCount < 10) {
      setAnsweredCount(prevCount => prevCount + 1);
    }

    if (answeredCount === 9) {
      setCompleted(true);
    }
  };

  return (
    <div className="daily-questions-encasing">
        <div className="question-counter">{`${answeredCount}/10`}</div>
        <div className="question">
          {!completed ? (
            <p>{questionsList[answeredCount]}</p>
          ) : (
            <p className="completion-message">You have completed all questions!</p>
          )}
      </div>
      <div className="swipe-buttons">
        {!completed && (
          <>
            <button className="swipe-button" onClick={handleSwipe}>Yes</button>
            <button className="swipe-button" onClick={handleSwipe}>No</button>
          </>
        )}
      </div>
    </div>
  );
};
