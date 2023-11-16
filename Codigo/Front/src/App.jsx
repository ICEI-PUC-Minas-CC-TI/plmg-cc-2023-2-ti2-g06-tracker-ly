// hooks
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLogin } from './hooks/auth';
// routes
import Presentation from './routes/Presentation';
import Perfil from './routes/Perfil';
import Rotina from './routes/Rotina';
import Feed from './routes/Feed';
// style
import { Box } from '@chakra-ui/react';
import './App.css'

function App() {
  const { loginAuth } = useLogin();

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={ !loginAuth ? <Presentation /> : <Navigate to="/feed" />}
          />
          <Route
            path="/login"
            element={ !loginAuth ? <Presentation /> : <Navigate to="/feed" />}
          />
          <Route
            path="/cadastro"
            element={ !loginAuth ? <Presentation /> : <Navigate to="/feed" />}
          />
          <Route
            path="/feed"
            element={ loginAuth ? <Feed /> : <Navigate to="/" /> }
          />
          <Route
            path="/perfil"
            element={loginAuth ? <Perfil /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
