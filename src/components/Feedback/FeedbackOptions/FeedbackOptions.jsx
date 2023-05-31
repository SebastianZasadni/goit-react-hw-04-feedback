import React, { useState } from 'react';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Notification } from '../Notification/Notification';
export const FeedbackOptions = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const getFeedbackPercentage = () => {
    return parseFloat(((good * 100) / (good + bad + neutral)).toFixed(2)) ?? 0;
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setGood(good + 1);
            setTotal(total + 1);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
            setTotal(total + 1);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
            setTotal(total + 1);
          }}
        >
          Bad
        </button>
      </div>
      <div>
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={getFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </>
  );
};
