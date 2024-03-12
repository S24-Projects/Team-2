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
            <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} /> Real risk avoider
            <br></br><input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} /> Cautious
            <br></br><input type="radio" value="3" checked={selectedOption === '3'} onChange={handleOptionChange} /> Willing to take risks after completing adequate research
            <br></br><input type="radio" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} /> Real gambler
          </label>

          {/*Question 2}{*/}
          <label>
            <p>Question 2<br></br>You are on a TV game show and can choose one of the following. Which would you take?</p>
            <input type="radio" value="5" checked={selectedOption === '5'} onChange={handleOptionChange} /> $1,000 in cash
            <br></br><input type="radio" value="6" checked={selectedOption === '6'} onChange={handleOptionChange} /> 50% chance at winning $5,000
            <br></br><input type="radio" value="7" checked={selectedOption === '7'} onChange={handleOptionChange} /> 25% chance at winning $10,000
            <br></br><input type="radio" value="8" checked={selectedOption === '8'} onChange={handleOptionChange} /> 5% chance at winning $100,000
          </label>
          
          {/*Question 3}{*/}
          <label>
            <p>Question 3<br></br>In general, how would your best friend describe you as a risk taker?</p>
            <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} /> A real risk avoider
            <br></br><input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} /> Cautious
            <br></br><input type="radio" value="3" checked={selectedOption === '3'} onChange={handleOptionChange} /> Willing to take risks after completing adequate research
            <br></br><input type="radio" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} /> A real gambler
          </label>

          {/*Question 4}{*/}
          <label>
            <p>Question 4<br></br>In general, how would your best friend describe you as a risk taker?</p>
            <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} /> A real risk avoider
            <br></br><input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} /> Cautious
            <br></br><input type="radio" value="3" checked={selectedOption === '3'} onChange={handleOptionChange} /> Willing to take risks after completing adequate research
            <br></br><input type="radio" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} /> A real gambler
          </label>

          {/*Question 5}{*/}
          <label>
            <p>Question 5<br></br>In general, how would your best friend describe you as a risk taker?</p>
            <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} /> A real risk avoider
            <br></br><input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} /> Cautious
            <br></br><input type="radio" value="3" checked={selectedOption === '3'} onChange={handleOptionChange} /> Willing to take risks after completing adequate research
            <br></br><input type="radio" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} /> A real gambler
          </label>

          {/*Question 6}{*/}
          <label>
            <p>Question 6<br></br>In general, how would your best friend describe you as a risk taker?</p>
            <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} /> A real risk avoider
            <br></br><input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} /> Cautious
            <br></br><input type="radio" value="3" checked={selectedOption === '3'} onChange={handleOptionChange} /> Willing to take risks after completing adequate research
            <br></br><input type="radio" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} /> A real gambler
          </label>
          
          {/*Question 7}{*/}
          <label>
            <p>Question 7<br></br>In general, how would your best friend describe you as a risk taker?</p>
            <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange} /> A real risk avoider
            <br></br><input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange} /> Cautious
            <br></br><input type="radio" value="3" checked={selectedOption === '3'} onChange={handleOptionChange} /> Willing to take risks after completing adequate research
            <br></br><input type="radio" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} /> A real gambler
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>  
    </div>
  );
}

export default App;
