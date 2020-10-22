import React from 'react';
import './App.css';
import Input from './input/Input';
import Languages from './Languages/Languages';

function App() {
  return (
    <div className="app">
      <img src='./assets/google.png' className={"google-logo"} />
      <Input />
      <Languages />
    </div>
  );
}

export default App;
