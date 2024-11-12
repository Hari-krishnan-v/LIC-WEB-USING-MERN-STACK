import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <ThemeProvider>

        <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
