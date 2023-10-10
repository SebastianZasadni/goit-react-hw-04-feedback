import css from './Section.module.css';

interface SectionType {
  title: string;
  children: JSX.Element;
}

export const Section = ({ title, children }: SectionType) => {
  return (
    <div className={css.sectionfeedback}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
