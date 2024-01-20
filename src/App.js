import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBox from './components/ChatBox';
import HeaderSection from './components/HeaderSection';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/helo"
          element={
            <>
              <ChatBox />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
