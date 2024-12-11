import React from 'react';
import { Button } from "./components/ui/button"
import './styles/globals.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <Button variant="outline">Button</Button>

      </h1>
    </div>
  );
}

export default App;
