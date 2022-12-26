import React, { useState } from "react";

import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 

const handleLeaveFeedback = event => {
  switch (event.target.name) {
    case 'good':
      setGood(good + 1);
      break;
    case 'neutral':
      setNeutral(neutral + 1);
      break;
    case 'bad':
      setBad(bad + 1);
      break;

    default:
      break;
  }
};

const total = good + neutral + bad;

const positiveFeedbackPercentage = Math.round((good / total) * 100);

    return (
      <div className ={css.statistics}>
       <Section title="Please leave feedback">
           <FeedbackOptions
             options={{ good, neutral, bad }}
             onLeaveFeedback={handleLeaveFeedback}
             />
         </Section>

      <Section title="Statistics">
      {total !== 0 ? 
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedbackPercentage}
        />
      : 
        <Notification message="There is no feedback"/>
      }
        </Section>
      </div>
    )};

export default App;
