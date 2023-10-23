// hooks
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routes
import Home from './routes/Home';
import Perfil from './routes/Perfil';
import Rotina from './routes/Rotina';
import Feed from './routes/Feed';
// style
import { Box } from '@chakra-ui/react';
import './App.css'
import Questionario from './routes/Questionario';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/feed"
            element={<Feed />}
          />
          <Route
            path="/perfil"
            element={<Perfil />}
          />
          <Route
            path="/questionario"
            element={<Questionario />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
