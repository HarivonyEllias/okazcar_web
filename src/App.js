import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ChatBox from './components/ChatBox';
// import HeaderSection from './components/HeaderSection';
// import NiceList from './components/NiceList';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Profil from './pages/Profil';

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
          path="https://main--okazcar-web.netlify.app/messages"
          element={
            <>
              <Chat />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="https://main--okazcar-web.netlify.app/profil"
          element={
            <>
              <Profil />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
