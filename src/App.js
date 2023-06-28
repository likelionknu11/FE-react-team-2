import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/common/Main';
import PrList from './components/PrList/prList';
import { DetailPage as Booking } from './components/Booking/DetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pr-list" element={<PrList />} />
          <Route path="/booking/:experienceId" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
