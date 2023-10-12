<<<<<<< HEAD:src/components/Feedback/Statistics/Statistics.tsx
interface StatisticsTypes {
  good: number;
  bad: number;
  neutral: number;
  total: number;
  feedbackPercentage: number;
}

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  feedbackPercentage,
}: StatisticsTypes) => {
  return (
    <div>
      {total ? (
        <div>
          <span> Good: {good}</span>
          <span> Neutral: {neutral}</span>
          <span> Bad: {bad}</span>
          <span> Total: {total}</span>
          <span> Positive feedback: {feedbackPercentage}%</span>
        </div>
      ) : (
        <p>There is no feedback.</p>
      )}
    </div>
  );
};

=======
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  feedbackPercentage,
}) => {
  return (
    <div>
      <span> Good: {good}</span>
      <span> Neutral: {neutral}</span>
      <span> Bad: {bad}</span>
      <span> Total: {total}</span>
      <span> Positive feedback: {feedbackPercentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
>>>>>>> parent of dab41c7 (fix):src/components/Feedback/Statistics/Statistics.jsx
