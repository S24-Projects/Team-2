import React, { useState } from 'react';
import './App.css';

function App() {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected option:', selectedOption);
  };

  const questionNumber = () =>{
    for(let i = 1; i < 7; i++){
      console.log(i);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Robo-Advisor</p>
      </header>
      
      <form className="Form" onSubmit={handleSubmit}>
        <fieldset>
          <label>
            {/*Question 1}{*/}
            <p>Question 1<br></br>In general, how would your best friend describe you as a risk taker?</p>
                     <input type="radio" name="question1" value="1" /> Real risk avoider
            <br></br><input type="radio" name="question1" value="2" /> Cautious
            <br></br><input type="radio" name="question1" value="3" /> Willing to take risks after completing adequate research
            <br></br><input type="radio" name="question1" value="4" /> Real gambler
          </label>

          {/*Question 2}{*/}
          <label>
            <p>Question 2<br></br>You are on a TV game show and can choose one of the following. Which would you take?</p>
                     <input type="radio" name="question2" value="1"  /> $1,000 in cash
            <br></br><input type="radio" name="question2" value="2"  /> 50% chance at winning $5,000
            <br></br><input type="radio" name="question2" value="3"  /> 25% chance at winning $10,000
            <br></br><input type="radio" name="question2" value="4"  /> 5% chance at winning $100,000
          </label>
          
          {/*Question 3}{*/}
          <label>
            <p>Question 3<br></br>In general, how would your best friend describe you as a risk taker?</p>
                     <input type="radio" name="question3" value="1" /> A real risk avoider
            <br></br><input type="radio" name="question3" value="2" /> Cautious
            <br></br><input type="radio" name="question3" value="3" /> Willing to take risks after completing adequate research
            <br></br><input type="radio" name="question3" value="4" /> A real gambler
          </label>

          {/*Question 4}{*/}
          <label>
            <p>Question 4<br></br>In general, how would your best friend describe you as a risk taker?</p>
                     <input type="radio" name="question4" value="1"  /> A real risk avoider
            <br></br><input type="radio" name="question4" value="2" /> Cautious
            <br></br><input type="radio" name="question4" value="3" /> Willing to take risks after completing adequate research
            <br></br><input type="radio" name="question4" value="4" /> A real gambler
          </label>

          {/*Question 5}{*/}
          <label>
            <p>Question 5<br></br>In general, how would your best friend describe you as a risk taker?</p>
                     <input type="radio" name="question5" value="1"  /> A real risk avoider
            <br></br><input type="radio" name="question5" value="2" /> Cautious
            <br></br><input type="radio" name="question5" value="3" /> Willing to take risks after completing adequate research
            <br></br><input type="radio" name="question5" value="4" /> A real gambler
          </label>

          {/*Question 6}{*/}
          <label>
            <p>Question 6<br></br>In general, how would your best friend describe you as a risk taker?</p>
                     <input type="radio" name="question6" value="1"  /> A real risk avoider
            <br></br><input type="radio" name="question6" value="2" /> Cautious
            <br></br><input type="radio" name="question6" value="3" /> Willing to take risks after completing adequate research
            <br></br><input type="radio" name="question6" value="4" /> A real gambler
          </label>
          
          {/*Question 7}{*/}
          <label>
            <p>Question 7<br></br>In general, how would your best friend describe you as a risk taker?</p>
                     <input type="radio" name="question7" value="1"  /> A real risk avoider
            <br></br><input type="radio" name="question7" value="2" /> Cautious
            <br></br><input type="radio" name="question7" value="3" /> Willing to take risks after completing adequate research
            <br></br><input type="radio" name="question7" value="4" /> A real gambler
          </label>
          <button type="submit">Submit</button>
        </fieldset>

      </form>  
    </div>
  );
}

export default App;
