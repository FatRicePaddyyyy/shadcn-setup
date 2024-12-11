import React from 'react';
import './App.css';
import { Button } from "./components/ui/button"
import './styles/globals.css'

function App() {
  return (
    <div className="App">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button variant="outline">Button</Button>
    </div>
  );
}

export default App;
