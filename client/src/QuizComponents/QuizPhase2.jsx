import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import { Button } from '../../GlobalStyles.jsx';

function QuizPhase2({ quiz, difficulty }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(2);
  const [answer3, setAnswer3] = useState(3);
  const [answer4, setAnswer4] = useState(4);
  const [correctAnswer, setCorrectAnswer] = useState(4);
  const [difficultyMod, setDifficultyMod] = useState(new Array(2));
  const [currentScore, setCurrentScore] = useState(0);
  const [tracker, setTracker] = useState(0);

  // axios get request with category and difficulty as params using questionNumber to identify the number
  // .then set questions with information from array
  const getPhase2 = () => {
    axios({
      method: 'GET',
      url: '/herohub/questions/',
      params: { quizID: quiz },
    })
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
        setCorrectAnswer(res.data[0].correctanswer);
        setAnswer1(res.data[0].correctanswer);
        setAnswer2(res.data[0].incorrectanswers[0]);
        setAnswer3(res.data[0].incorrectanswers[1]);
        setAnswer4(res.data[0].incorrectanswers[2]);
      });
  };

  const handleDifficulty = () => {
    if (difficulty === 'easy') setDifficultyMod([0.5, 120000]);
    if (difficulty === 'medium') setDifficultyMod([1, 60000]);
    if (difficulty === 'hard') setDifficultyMod([2, 30000]);
  };

  useEffect(() => {
    getPhase2();
    handleDifficulty();
  }, []);
  const handleClick1 = (event) => {
    if (answer1 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('try again dork');
    }
  };

  const handleClick2 = (event) => {
    if (answer2 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('try again dork');
    }
  };

  const handleClick3 = (event) => {
    if (answer3 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('try again dork');
    }
  };

  const handleClick4 = (event) => {
    if (answer4 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      //if tracker is >= 10 tracker +=1 else quiz is done
      alert('try again dork');
    }
  };

  const timeout = () => {
    alert(`Time's up!`);
  };

  return questions.length !== 0 && (
    <div>
      <h1>{questions[0].body}</h1>
      <Button onClick={handleClick1}>{answer1}</Button>
      <Button onClick={handleClick2}>{answer2}</Button>
      <Button onClick={handleClick3}>{answer3}</Button>
      <Button onClick={handleClick4}>{answer4}</Button>
      <Countdown date={Date.now() + difficultyMod[1]} />
    </div>
  );
}

export default QuizPhase2;
