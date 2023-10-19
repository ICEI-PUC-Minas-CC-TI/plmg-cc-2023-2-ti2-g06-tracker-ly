// hooks
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routes
import Home from './routes/Home';
import Perfil from './routes/Perfil';
import Rotina from './routes/Rotina';
// style
import { Box } from '@chakra-ui/react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="100vw">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/rotina"
            element={<Rotina />}
          />
          <Route
            path="/perfil"
            element={<Perfil />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
