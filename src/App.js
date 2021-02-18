import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './components/form';
import Button from 'react-bootstrap/Button';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    });
  }, []);

  return (
    <div className="App">
      <br/><br/><br/><br/><br/>
      <h1>Starter Project</h1>
      <p>The current time is {currentTime}</p>
      <br/>
      <Form/>
      <Button>Get random fact</Button>
    </div>
  );
}

export default App;