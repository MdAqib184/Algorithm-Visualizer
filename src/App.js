import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDetails from './homeComponents/homeDetails';
import Sort from "./sortComponents/sort";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import BinarySearch from './binarySearchComponent/binarySearch';

function App() {
  return (
    <Router basename="/Algorithm-Visualizer">
      <Routes>
        <Route path='/sort' element={<Sort />} />
        <Route path='/' element={<HomeDetails />} />
        <Route path='/recursivesort' element={<RecursiveSort />} />
        <Route path='/binarysearch' element={<BinarySearch/> } />
      </Routes>
    </Router>
  );
}

export default App;
