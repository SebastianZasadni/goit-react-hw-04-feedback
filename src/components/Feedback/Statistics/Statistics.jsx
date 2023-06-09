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

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
