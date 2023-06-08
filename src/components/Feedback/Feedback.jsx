import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const Feedback = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = state;

  const leaveFeedbackHandler = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const getFeedbackPercentage = () => {
    if (good) {
      return parseFloat(((good * 100) / (good + bad + neutral)).toFixed(2));
    } else {
      return 0;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={leaveFeedbackHandler}
        />
      </Section>
      <Section title="Your feedback">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + bad + neutral}
          feedbackPercentage={getFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
