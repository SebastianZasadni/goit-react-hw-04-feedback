<<<<<<< HEAD
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
>>>>>>> parent of dab41c7 (fix)
