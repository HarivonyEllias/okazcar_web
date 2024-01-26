import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackOfficeNav from './backoffice/BackOfficeNav';
import ChatBox from './components/ChatBox';
import HeaderSection from './components/HeaderSection';
import NiceList from './components/NiceList';
import Chat from './pages/Chat';
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
          path="/messages"
          element={
            <>
              <BackOfficeNav idactive={0}  />
              <NiceList title={"annonce en suspend."}/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
