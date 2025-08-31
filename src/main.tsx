import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Componets/Routes/Routes';
// import { router } from './Components/Routes/Routes';

// TypeScript-safe way to get root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className=" mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
