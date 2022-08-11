import React, {useState, useEffect , useCallback} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Single from './pages/single/Single';



function App(props) {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
              <Route path="/" >
                  <Route index element={<Home />} />
                  <Route path=":cardId" element={<Single />} />
                  <Route path="about">
                      <Route index element={<About />} />
                  </Route>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
