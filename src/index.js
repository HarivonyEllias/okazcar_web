import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
            path="/huhu/hoho"
            element={
              <>
                <p>huhu</p>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="https://okazcar-web.netlify.app/profil"
            element={
              <>
                <Profil />
              </>
            }
          />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
