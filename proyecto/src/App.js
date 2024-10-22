import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import ActivityPage from './Pages/Activity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/activity/:activityId" element={<ActivityPage />} />
      </Routes>
    </Router>
  );
}

export default App;

