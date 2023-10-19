// hooks
import React from 'react'
import ReactDOM from 'react-dom/client'
// components
import App from './App.jsx'
// chakra
import { CSSReset, ChakraProvider, extendTheme } from '@chakra-ui/react'
// style
import {getTheme} from "./Theme.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme({...getTheme()})}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
