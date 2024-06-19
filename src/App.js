import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDetails from './homeComponents/homeDetails';
import Sort from "./sortComponents/sort";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/sort' element={<Sort />} />
        <Route path='/' element={<HomeDetails />} />
        <Route path='/recursivesort' element={<RecursiveSort />} />
      </Routes>
    </Router>
  );
}

export default App;
