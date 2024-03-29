import css from './FeedbackOptions.module.css';

type leaveFeedbackFunction = (option: string) => void;

interface FeedbackOptionsProps {
  options: string[];
  onLeaveFeedback: leaveFeedbackFunction;
}

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}: FeedbackOptionsProps) => {
  return (
    <ul className={css.optionsList}>
      {options.map(option => (
        <li key={option} className={css.optionsListItem}>
          <button
            className={css.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
