import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDetails from './homeComponents/homeDetails';
import Sort from "./sortComponents/sort";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import BinarySearch from './binarySearchComponent/binarySearch';
import Pathfinder from './pathfinderComponents/pathfinder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/sort' element={<Sort />} />
        <Route path='/' element={<HomeDetails />} />
        <Route path='/recursivesort' element={<RecursiveSort />} />
        <Route path='/binarysearch' element={<BinarySearch /> } />
        <Route path='/pathfinder' element={<Pathfinder />} />
      </Routes>
    </Router>
  );
}

export default App;
