import "../screens/healthQuiz.css";

/*
props: length, currentIndex
*/
const HealthQuizProgressBar = (props) => {
  return (
    <div className="health-quiz-progress-bar">
      <div
        className={
          props.currentIndex == props.length
            ? "health-quiz-progress-done"
            : "health-quiz-progress"
        }
        style={{ width: `${(props.currentIndex * 100) / props.length}%` }}
      ></div>
    </div>
  );
};

export default HealthQuizProgressBar;
