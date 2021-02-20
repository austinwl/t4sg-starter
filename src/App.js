import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    });
  }, []);

  const [value, setValue] = useState('');
  const [fact, setFact] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name: value };
    console.log('submit');
    console.log(value);
    fetch('/reverse', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        setValue(res.name.name)
      });
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  function getCatFact() {
    axios.get(`https://cat-fact.herokuapp.com/facts`)
      .then(res => {
        setFact(res.data[0].text);
      }
    );
  }

  return (
    <div className="App">
      <br/><br/><br/><br/><br/>
      <h1>Starter Project</h1>
      <p>The current time is {currentTime}</p>
      <br/>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleValue}/>
        <button>submit</button>
      </form>
      <br/>
      <p>reversed word: {value}</p>
      <br/>
      {/* <Form/> */}
      <Button onClick={getCatFact}>Get a cat fact</Button>
      <br/><br/>
      <div>
        <p>fun fact: {fact}</p>
      </div>
    </div>
  );
}

export default App;