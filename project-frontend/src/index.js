import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, CSSReset} from '@chakra-ui/react';
import { AuthContex } from './context/authContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <CSSReset/>
    <React.StrictMode>
      <AuthContex>
        <App />
      </AuthContex>
    </React.StrictMode>
  </ChakraProvider>
  
);

reportWebVitals();
