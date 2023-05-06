import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
