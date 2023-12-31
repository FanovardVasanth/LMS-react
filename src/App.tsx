import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizAssesment from './pages/quiz-assesment';
import Quizlist from './pages/quiz-list';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

  
function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Quizlist />} />
        <Route path="/Quizes/:itemId" element={<QuizAssesment />} />
      </Routes>
    </Router>
  );
}

export default App;
