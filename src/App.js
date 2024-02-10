import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Profil from "./pages/Profil";
import {RequireAuth} from "react-auth-kit";
import {Login} from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <Login />
                    }
                />
            </Routes>
            <Routes>
                <Route
                    path="/"
                    element={
                    <RequireAuth loginPath="/login">
                        <Home />
                    </RequireAuth>
                    }
                />
            </Routes>
            <Routes>
                <Route
                    path="/messages"
                    element={
                        <RequireAuth loginPath="/login">
                            <Chat />
                        </RequireAuth>
                    }
                />
            </Routes>
            <Routes>
                <Route
                    path="/profil"
                    element={
                        <>
                            <RequireAuth loginPath="/login">
                                <Profil />
                            </RequireAuth>
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
